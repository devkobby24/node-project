const express = require('express');
const router = express.Router();
const { getProducts, getProductById, updateProductById, updateMultipleProducts, deleteAllMatchingProducts, deleteProductByFilter, deleteProductById, createProduct } = require('../controllers/product.controller.js');

router.get('/get-product', getProducts);

router.get('/get-product/:id', getProductById);

router.post('/add-product', createProduct);

router.put('/update-product/:id', updateProductById);

router.put('/update-many', updateMultipleProducts);

router.delete('/delete-all', deleteAllMatchingProducts);

router.delete('/delete-filter', deleteProductByFilter);

router.delete('/delete/:id', deleteProductById);




module.exports = router;