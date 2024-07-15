import { ProductProvider, useProducts } from './context/ProductContext';
import Home from './pages/Home';
import { Route, Routes, useParams } from 'react-router-dom';
import EditProductForm from './components/EditProductForm/EditProductForm';

function EditProductFormWrapper() {
  const { id } = useParams();
  const { products } = useProducts();
  const productId = parseInt(id as string);
  const product = products.find(p => p.id === productId);

  if (!product) {
      return <div>Produto não encontrado!</div>;
  }

  return <EditProductForm product={product} />;
};

function App() {

  return (
    <ProductProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<EditProductFormWrapper />} />
      </Routes>
    </ProductProvider>
  );
};

export default App;
