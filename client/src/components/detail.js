import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({}); // this is an empty object because we are expecting an object from the database
    const { id } = useParams(); // this is grabbing the id from the url

    useEffect(() => { // this is grabbing the product from the database
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data)}) // this is setting the product state variable to the product returned by the API
            .catch(err => console.log(err))
    }
    , [id]); // We add id to the dependency array because we want this to run every time the id changes

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <a href="/products">Go Back</a> | <a href={`/products/edit/${product._id}`}>Edit</a> {/* Link to the edit page */}
        </div>
    )
}

export default Detail;
