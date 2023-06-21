import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const { productId, successCallback } = props; // Destructure the props object to get the productId and successCallback function

    const deleteProduct = e => { // Function to delete a product
        axios.delete('http://localhost:8000/api/products/' + productId) // Send a delete request to the server
            .then(res => {
                successCallback(); // Call the successCallback function to remove the product from the DOM
            })
    }

    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}

export default DeleteButton;