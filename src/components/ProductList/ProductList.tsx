import { useState } from 'react';
import { useProducts } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import * as C from './style';
import { IProduct } from '../../interfaces/Product';

export function ProductList() {
    const navigate = useNavigate();
    const { products, removeProduct } = useProducts();
    const [search, setSearch] = useState('');

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
            <ul>
                {filteredProducts.map((product) => (
                    <C.ProductItem key={product.id}>
                        <C.ProductTitle>{product.nome}</C.ProductTitle>
                        <C.ProductDescription>{product.descricao}</C.ProductDescription>
                        <C.ProductPrice>Preço: R${product.preco}</C.ProductPrice>
                        <C.Button backgroundColor onClick={() => removeProduct(product.id)}>Deletar</C.Button>
                        <C.Button onClick={() => navigateToEdit(product.id)}>Editar</C.Button>
                    </C.ProductItem>
                ))}
            </ul>
        </C.ProductListContainer>
    );
};

export default ProductList;
