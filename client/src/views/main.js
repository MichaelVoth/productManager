import React, { useState } from 'react';
import ProductForm from '../components/productForm';
import ProductList from '../components/productList';

const Main = (props) => {
    const [products, setProducts] = useState([]); // State for list of products

    const removeFromDom = productId => { // Function to remove a product from the DOM
        setProducts(products.filter(product => product._id !== productId)); // Filter out the product with the matching ID and return a new array without that product
    }



    return (
        <div>
            <ProductForm products={products} setProducts={setProducts} /> {/* Pass the state variables and setter as props to the ProductForm component */}
            <hr /> {/* Horizontal line to separate the form from the list */}
            <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom}/> {/* Pass the state variables and setter as props to the ProductList component */}
        </div>
    )
}
export default Main;