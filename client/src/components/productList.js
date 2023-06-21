import React, { useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from './deleteButton';

const ProductList = (props) => {
    const {products, setProducts, removeFromDom} = props; 

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
                                <td>
                                    <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)} />
                                </td> {/* DeleteButton component */}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ProductList; 
