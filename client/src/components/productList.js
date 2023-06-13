import React, { useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const ProductList = (props) => {
    const {products, setProducts, removeFromDom} = props; 


    const deleteProduct = (productId) => { // Function to delete a product
        axios.delete(`http://localhost:8000/api/products/${productId}`) // Send the delete request to the server
            .then(res => { // If the request is successful...
                removeFromDom(productId); // Use the removeFromDom function passed as a prop to remove the deleted product from the DOM
            })
            .catch(err => console.log(err)); // If the request is unsuccessful, log the error to the console
    }

    useEffect(() => { // When the component is first rendered...
        axios.get('http://localhost:8000/api/products') // Send a get request to the server
            .then(res => { // If the request is successful...
                console.log(res.data);
                setProducts(res.data);// Set the products state variable to the array of products returned by the API
            })
            .catch(err => console.log(err));
    }, []
    );

    return (
        <div>
            <h1>All Products:</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, i) => // Map through the products array and display each product in a table row
                            <tr key={i}>
                                <td>
                                    <Link to= {`/products/${product._id}`}>  {/* Link to the product detail page */}
                                    {product.title}
                                    </Link></td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td><button onClick={(e)=> {deleteProduct(product._id)}}>Delete</button></td> {/* Button to delete the product */}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ProductList;