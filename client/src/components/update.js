import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams(); // this is grabbing the id from the url

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate(); // this is used to navigate to a different route

    useEffect(() => { // this is grabbing the product from the database
        axios.get(`http://localhost:8000/api/products/${id}`) 
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title); // Set the title, price, and description state variables to the values returned by the API
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }
    , [id]); // We add id to the dependency array because we want this to run every time the id changes

    const updateProduct = (e) => { // Function to update a product
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/products/${id}`, { // Send a patch request to the server
            title, // Pass in the title, price, and description from the form
            price,
            description
        })
            .then(res => {
                console.log(res.data);
                navigate("/products"); // Navigate back to the main page
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}> {/* When the form is submitted, run the updateProduct function */}
                <p>
                    <label>Title</label><br/>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/> {/* Set the value of the input to the title state variable */}
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} value={price}/> {/* Set the value of the input to the price state variable */}
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/> {/* Set the value of the input to the description state variable */}
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Update;

