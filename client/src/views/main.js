import React, { useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/productForm';
import ProductList from '../components/productList';

const Main = (props) => {
    const [products, setProducts] = useState([]); // State for list of products
    const [product, setProduct] = useState({title: "", price: 0, description: ""}); // State for the product form

    const removeFromDom = productId => { // Function to remove a product from the DOM
        setProducts(products.filter(product => product._id !== productId)); // Filter out the product with the matching ID and return a new array without that product
    }

    const onSubmitHandler = (e) => { // This function is called when the form is submitted
        e.preventDefault(); // Prevents the default refresh of the browser
        axios.post('http://localhost:8000/api/products', product) // Make a POST request to create a new product
            .then(res => { // If successful, do something with the response. In this case, add the new product to the products array
                console.log(res); // Log the response object to the console to see what you get back
                setProducts([...products, res.data]);
                setProduct({title: "", price: 0, description: ""}); // Reset the product state object
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm product={product} setProduct={setProduct} onSubmitProp={onSubmitHandler}/> {/* Pass the state variables and setter as props to the ProductForm component */}
            <hr /> {/* Horizontal line to separate the form from the list */}
            <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom}/> {/* Pass the state variables and setter as props to the ProductList component */}
        </div>
    )
}
export default Main;
