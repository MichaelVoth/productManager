import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "./productForm";
import DeleteButton from "./deleteButton";

const Update = (props) => {
    const { id } = useParams(); // this is grabbing the id from the url

    const [product, setProduct] = useState({title: "", price: "", description: ""});
    const [loaded, setLoaded] = useState(false);

    const navigate = useNavigate(); // this is used to navigate to a different route

    useEffect(() => { // this is grabbing the product from the database
        axios.get(`http://localhost:8000/api/products/${id}`) 
            .then(res => {
                console.log(res.data);
                setProduct({
                    title: res.data.title,
                    price: res.data.price,
                    description: res.data.description
                });
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [id]); // We add id to the dependency array because we want this to run every time the id changes

    const updateProduct = (e) => { // Function to update a product
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/products/${id}`, product) // Send a patch request to the server
            .then(res => {
                console.log(res.data);
                navigate("/products"); // Navigate back to the main page
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && // If the product has been loaded from the database, display the form
            <ProductForm 
                product={product} // Pass in the product state object
                setProduct={setProduct} // Pass in the setter function for the product state object
                onSubmitProp={updateProduct} // Pass in the updateProduct function
            />
            }
            <DeleteButton productId={id} successCallback={() => navigate("/products")} /> {/* DeleteButton component */}
        </div>
    )
}

export default Update;
