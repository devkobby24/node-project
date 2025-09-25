const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const dbconnect = process.env.DATABASE_URL;
const Product = require('./models/product.model.js');


app.use(express.json());

//get all products
app.get('/api/get-products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
});


app.get('/api/get-product/:id', async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
});


//create a product
app.post('/api/add-products', async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
});

app.listen(3000);

//connect to db
mongoose.connect(dbconnect)
    .then(() => console.log('Connected to DB succcessfully'))
    .catch(err => console.log(err));