import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../api/api';
import { IProduct } from '../interfaces/Product';

interface ProductContextProps {
    products: IProduct[];
    fetchProducts: () => void;
    addProduct: (product: Omit<IProduct, 'id'>) => void;
    editProduct: (id: number, product: Omit<IProduct, 'id'>) => void;
    removeProduct: (id: number) => void;
}

interface ProductProviderProps {
    children: ReactNode;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export function ProductProvider({ children }: ProductProviderProps) {
    const [products, setProducts] = useState<IProduct[]>([]);

    const fetchProducts = async () => {
        const response = await getProducts();
        setProducts(response.data);
    };

    const addProduct = async (product: Omit<IProduct, 'id'>) => {
        await createProduct(product);
        fetchProducts();
    };

    const editProduct = async (id: number, product: Omit<IProduct, 'id'>) => {
        await updateProduct(id, product);
        fetchProducts();
    };

    const removeProduct = async (id: number) => {
        await deleteProduct(id);
        fetchProducts();
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products, fetchProducts, addProduct, editProduct, removeProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('Não consegui recuperar as informações do produto :(');
    }
    return context;
};
