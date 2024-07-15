import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

//Tipar o produto depois
export const getProducts = () => api.get('/produtos');
export const createProduct = (product: any) => api.post('/produtos', product);
export const updateProduct = (id: number, product: any) => api.put(`/produtos/${id}`, product);
export const deleteProduct = (id: number) => api.delete(`/produtos/${id}`);
