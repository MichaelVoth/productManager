import React, { useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductList = (props) => {
    const {products, setProducts} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch(err => console.log(err));
    }
    , []);

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
                        products.map((product, i) =>
                            <tr key={i}>
                                <td>
                                    <Link to= {`/products/${product._id}`}>
                                    {product.title}
                                    </Link></td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ProductList;