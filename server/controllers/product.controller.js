const Product = require('../models/product.model'); // import our Product model

module.exports.index = (request, response) => { 
    
}

module.exports.findAllProducts = (request, response) => { // index method to display all products
    Product.find() // use the find method on our Product model to get all products
        .then(allProducts => {
            console.log(allProducts);
            response.json(allProducts);
        }) // if successful, send all products back as JSON
        .catch(err => {
            console.log(err);
            response.json(err)
        }); // if there's an error, send it back as JSON
}

module.exports.createProduct = (request, response) => { // createProduct method to create a new product
    Product.create(request.body) // use the create method on our Product model to create a new product object with the data from request.body
        .then(Product => response.json(Product)) // if successful, send the newly created product object back as JSON
        .catch(err => response.status(400).json(err)); // if there's an error, send it back as JSON
}

module.exports.findOneProduct = (request, response) => { // findOneProduct method to find a single product by ID
    Product.findOne({ _id: request.params.id }) // use the findOne method on our Product model to find one product by it's _id
        .then(oneProduct => response.json(oneProduct)) // if successful, send the newly found product object back as JSON
        .catch(err => response.json(err)); // if there's an error, send it back as JSON
}

module.exports.updateProduct = (request, response) => { // updateProduct method to find a single product by ID and update it
    Product.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }) // use the findOneAndUpdate method on our Product model to find one product by it's _id and update it with the data from request.body
    .then(updatedProduct => response.json(updatedProduct)) // if successful, send the newly updated product object back as JSON
    .catch(err => response.status(400).json(err)); // if there's an error, send it back as JSON
}

module.exports.deleteProduct = (request, response) => { // deleteProduct method to find a single product by ID and delete it
    Product.deleteOne({ _id: request.params.id }) // use the deleteOne method on our Product model to find one product by it's _id and delete it
        .then(deleteConfirmation => response.json(deleteConfirmation)) // if successful, send the deleted product object back as JSON
        .catch(err => response.json(err)); // if there's an error, send it back as JSON
}
