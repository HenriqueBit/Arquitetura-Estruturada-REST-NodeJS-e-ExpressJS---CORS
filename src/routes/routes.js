const router = require('express').Router();

const ProductsController = require('../controller/products');

// Definindo as rotas da aplicação
router.get('/products/:id?', ProductsController.get)
router.post('/products', ProductsController.post)
router.put('/products/:id', ProductsController.put)
router.delete('/products/:id', ProductsController.del)

module.exports = router