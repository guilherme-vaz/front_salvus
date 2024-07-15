import { useForm } from 'react-hook-form';
import { useProducts } from '../../context/ProductContext';
import * as C from './style'
import { IFormData } from '../../interfaces/Formdata';

export function  AddProductForm() {
    const { register, handleSubmit, reset } = useForm<IFormData>();
    const { addProduct } = useProducts();

    const onSubmit = (data: IFormData) => {
        data.dataCriacao = new Date().toISOString();
        addProduct(data);
        reset();
    };

    return (
        <C.FormContainer onSubmit={handleSubmit(onSubmit)}>
            <C.FormTitle>Adicionar Produto</C.FormTitle>
            <C.Input {...register('nome', { required: true })} placeholder="Nome" />
            <C.Input {...register('descricao', { required: true })} placeholder="Descrição" />
            <C.Input {...register('preco', { required: true })} placeholder="Preço" type="number"/>
            <C.SubmitButton type="submit">Adicionar</C.SubmitButton>
        </C.FormContainer>
    );
};

export default AddProductForm;
