import { useState } from 'react';
import { useProducts } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import * as C from './style';
import { IProduct } from '../../interfaces/Product';
import { Spinner } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react';

export function ProductList() {
    const navigate = useNavigate();
    const { products, loading, removeProduct } = useProducts();
    const [search, setSearch] = useState('');
    const toast = useToast();

    const handleDelete = async (productId: number) => {
        try {
            await removeProduct(productId);
            toast({
                title: 'Produto removido!',
                description: 'O produto foi removido com sucesso.',
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        } catch (error) {
            console.error(`Erro ao remover produto ${productId}:`, error);
            toast({
                title: 'Erro ao remover produto!',
                description: 'Ocorreu um erro ao tentar remover o produto.',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
        }
    };

    const navigateToEdit = (productId: number) => {
        navigate(`/product/${productId}`);
    };

    const filteredProducts = search
        ? products.filter((product: IProduct) =>
            product.nome.toLowerCase().includes(search.toLowerCase())
        )
        : products;

    return (
        <C.ProductListContainer>
            <C.SearchContainer>
                <C.SearchInput
                    type="text"
                    placeholder="Procurar produtos..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </C.SearchContainer>
            {loading ? ( 
                <C.SpinnerDiv>
                    <Spinner size="xl" color="blue.500" thickness="4px" speed="0.65s" emptyColor="gray.200" />
                    <p>Carregando produtos...</p>
                </C.SpinnerDiv>
            ) : (
                <ul>
                    {filteredProducts.map((product) => (
                        <C.ProductItem key={product.id}>
                            <C.ProductTitle>{product.nome}</C.ProductTitle>
                            <C.ProductDescription>{product.descricao}</C.ProductDescription>
                            <C.ProductPrice>Preço: R${product.preco}</C.ProductPrice>
                            <C.Button backgroundColor onClick={() => handleDelete(product.id)}>
                                Deletar
                            </C.Button>
                            <C.Button onClick={() => navigateToEdit(product.id)}>Editar</C.Button>
                        </C.ProductItem>
                    ))}
                </ul>
            )}
        </C.ProductListContainer>
    );
};

export default ProductList;
