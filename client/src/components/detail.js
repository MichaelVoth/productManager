import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data)})
            .catch(err => console.log(err))
    }
    , [id]);

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <a href="/products">Go Back</a>
        </div>
    )
}

export default Detail;
