import React, { useState } from 'react';
import ProductForm from '../components/productForm';
import ProductList from '../components/productList';

const Main = (props) => {
    const [products, setProducts] = useState([]);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }



    return (
        <div>
            <ProductForm products={products} setProducts={setProducts} />
            <hr />
            <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;