const Product = require('../models/product.model'); // import our Product model

module.exports.index = (request, response) => { 
    
}

module.exports.findAllProducts = (request, response) => { // index method to display all products
    Product.find() // use the find method on our Product model to get all products
        .then(allProducts => response.json(allProducts)) // if successful, send all products back as JSON
        .catch(err => response.json(err)); // if there's an error, send it back as JSON
}

module.exports.createProduct = (request, response) => { // createProduct method to create a new product
    Product.create(request.body) // use the create method on our Product model to create a new product object with the data from request.body
        .then(Product => response.json(Product)) // if successful, send the newly created product object back as JSON
        .catch(err => response.status(400).json(err)); // if there's an error, send it back as JSON
}
