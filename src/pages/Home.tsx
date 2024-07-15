import ProductList from '../components/ProductList/ProductList';
import AddProductForm from '../components/AddProductForm.tsx/AddProductForm';

function Home() {
    return (
        <div>
            <AddProductForm />
            <ProductList />
        </div>
    );
};

export default Home;
