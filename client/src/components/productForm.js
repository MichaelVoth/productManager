import React from 'react';


const ProductForm = (props) => {
    const { product, setProduct, onSubmitProp } = props;

    const onChangeHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <form onSubmit={onSubmitProp}> {/* When the form is submitted, call the onSubmitProp function */}
                <p>
                    <label>Title</label><br/>
                    <input type="text" name="title" onChange={onChangeHandler} value={product.title}/> {/* Set the value of the title state variable to be the value of the input field */}
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="number" name="price" onChange={onChangeHandler} value={product.price}/> {/* Set the value of the price state variable to be the value of the input field */}
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" name="description" onChange={onChangeHandler} value={product.description}/> {/* Set the value of the description state variable to be the value of the input field */}
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default ProductForm; // Export the ProductForm component so it can be imported in App.js
