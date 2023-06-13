const ProductController = require('../controllers/product.controller');

module.exports = (app) => { // We pass in app to our routes function
    app.get('/api/', ProductController.index); // We call the index function from our controller
    app.post('/api/products', ProductController.createProduct) // We call the createProduct function from our controller
    app.get('/api/products', ProductController.findAllProducts); // We call the findAllProducts function from our controller
    app.get('/api/products/:id', ProductController.findOneProduct); // We call the findOneProduct function from our controller
    app.patch('/api/products/:id', ProductController.updateProduct); // We call the updateProduct function from our controller
    app.delete('/api/products/:id', ProductController.deleteProduct); // We call the deleteProduct function from our controller
}