import { useForm } from 'react-hook-form';
import { useProducts } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../interfaces/Product';
import { useToast } from '@chakra-ui/react'
import * as C from './style'

interface EditProductFormProps {
    product: IProduct
}

export function EditProductForm({ product }: EditProductFormProps) {
    const navigate = useNavigate()
    const toast = useToast()
    const { register, handleSubmit } = useForm({
        defaultValues: {
            nome: product.nome,
            descricao: product.descricao,
            preco: product.preco,
        },
    });
    const { editProduct } = useProducts();

    const onSubmit = (data: any) => {
        const updatedProduct = {
            nome: data.nome || product.nome,
            descricao: data.descricao || product.descricao,
            preco: data.preco || product.preco,
            dataCriacao: '',
        };
        
        editProduct(product.id, updatedProduct);
        
        toast({
            title: 'Produto atualizado!',
            description: 'Voltando para página inicial em alguns segundos',
            status: 'success',
            duration: 2000,
            isClosable: true,
        });

        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    const onError = () => {
        toast({
            title: 'Erro ao atualizar produto.',
            description: 'Preencha todos os campos obrigatórios',
            status: 'error',
            duration: 2000,
            isClosable: true,
        });
    };

    return (
        <C.FormContainer onSubmit={handleSubmit(onSubmit, onError)}>
            <C.FormTitle>Editar Produto</C.FormTitle>
            <C.Input {...register('nome', { required: true })} placeholder="Nome" />
            <C.Input {...register('descricao', { required: true })} placeholder="Descrição" />
            <C.Input {...register('preco', { required: true })} placeholder="Preço" type="number" />
            <C.SubmitButton type="submit">Atualizar</C.SubmitButton>
        </C.FormContainer>
    );
};

export default EditProductForm;
