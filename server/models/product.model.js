const mongoose = require('mongoose'); // import mongoose

const ProductSchema = new mongoose.Schema({ // create a new instance of a mongoose schema
    title: {
        type: String,
        required: [true, "Title is required"], 
        minlength: [2, "Title must be at least 2 characters long"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be at least 0"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [5, "Description must be at least 5 characters long"]
    }
}, { timestamps: true }); // timestamps: true will automatically add the createdAt and updatedAt fields

module.exports = mongoose.model('Product', ProductSchema); // register our schema as a model called Product