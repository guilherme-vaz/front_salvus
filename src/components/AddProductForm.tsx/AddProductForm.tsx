import { useForm } from 'react-hook-form';
import { useProducts } from '../../context/ProductContext';
import * as C from './style';
import { IFormData } from '../../interfaces/Formdata';
import { useToast } from '@chakra-ui/react';

export function AddProductForm() {
    const { register, handleSubmit, reset } = useForm<IFormData>();
    const { addProduct } = useProducts();
    const toast = useToast();

    const onSubmit = (data: IFormData) => {
        data.dataCriacao = new Date().toISOString();
        addProduct(data);
        reset();
        toast({
            title: 'Produto adicionado!',
            description: 'O produto foi adicionado com sucesso.',
            status: 'success',
            duration: 2000,
            isClosable: true,
        });
    };

    const onError = () => {
        toast({
            title: 'Erro ao adicionar produto.',
            description: 'Preencha todos os campos obrigatórios',
            status: 'error',
            duration: 2000,
            isClosable: true,
        });
    };

    return (
        <C.FormContainer onSubmit={handleSubmit(onSubmit, onError)}>
            <C.FormTitle>Adicionar Produto</C.FormTitle>
            <C.Input {...register('nome', { required: true })} placeholder="Nome" />
            <C.Input {...register('descricao', { required: true })} placeholder="Descrição" />
            <C.Input {...register('preco', { required: true })} placeholder="Preço" type="number" />
            <C.SubmitButton type="submit">Adicionar</C.SubmitButton>
        </C.FormContainer>
    );
};

export default AddProductForm;
