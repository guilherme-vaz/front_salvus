import React from 'react';
import { useForm } from 'react-hook-form';
import { useProducts } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../interfaces/Product';
import * as C from './style'

interface EditProductFormProps {
    product: IProduct
}

export function EditProductForm({ product }: EditProductFormProps) {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm({
        defaultValues: {
            nome: product.nome,
            descricao: product.descricao,
            preco: product.preco,
        },
    });
    const { editProduct } = useProducts();

    const onSubmit = (data: any) => {
        editProduct(product.id, {
            nome: data.nome,
            descricao: data.descricao,
            preco: data.preco,
            dataCriacao: '',
        });
        navigate('/')
    };

    return (
        <C.FormContainer onSubmit={handleSubmit(onSubmit)}>
            <C.FormTitle>Editar Produto</C.FormTitle>
            <C.Input {...register('nome', { required: true })} placeholder="Nome" />
            <C.Input {...register('descricao', { required: true })} placeholder="Descrição" />
            <C.Input {...register('preco', { required: true })} placeholder="Preço" type="number" />
            <C.SubmitButton type="submit">Atualizar</C.SubmitButton>
        </C.FormContainer>
    );
};

export default EditProductForm;
