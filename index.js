const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const dbconnect = process.env.DATABASE_URL;
const Product = require('./models/product.model.js');


app.use(express.json());

app.get('/', function (req, res) {
    res.send("Hello World. I'm testing to see what happens when I change this text. Did it?");
});

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

mongoose.connect(dbconnect)
    .then(() => console.log('Connected to DB succcessfully'))
    .catch(err => console.log(err));