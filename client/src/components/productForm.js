import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const {products, setProducts} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => { // This function is called when the form is submitted
        e.preventDefault(); // Prevents the default refresh of the browser
        axios.post('http://localhost:8000/api/products', { // Make a POST request to create a new product
            title, // The title state variable
            price, // The price state variable
            description // The description state variable
        })
            .then(res => { // If successful, do something with the response. In this case, add the new product to the products array
                console.log(res); // Log the response object to the console to see what you get back
                setProducts([...products, res.data]);
            })
            .catch(err => console.log(err))
        setTitle(""); // Reset the title state variable to be an empty string
        setPrice(0);
        setDescription("");
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}> {/* When the form is submitted, call the onSubmitHandler function */}
                <p>
                    <label>Title</label><br/>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/> {/* Set the value of the title state variable to be the value of the input field */}
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} value={price}/> {/* Set the value of the price state variable to be the value of the input field */}
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/> {/* Set the value of the description state variable to be the value of the input field */}
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default ProductForm; // Export the ProductForm component so it can be imported in App.js