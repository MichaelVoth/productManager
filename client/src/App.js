
import ProductForm from './components/productForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <ProductForm />
      <a href="http://localhost:3000/api/products">View All Products</a>
    </div>
  );
}

export default App;
