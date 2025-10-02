const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const dbconnect = process.env.DATABASE_URL;
const productRoutes = require('./routes/product.route.js');


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api", productRoutes);

app.listen(3000);

//connect to db
mongoose.connect(dbconnect)
    .then(() => console.log('Connected to DB succcessfully'))
    .catch(err => console.log(err));


//get all products
// app.get('/api/get-product', async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.status(200).json(products);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Server Error');
//     }
// });

//getting a product by id
// app.get('/api/get-product/:id', async (req, res) => {
//     try {
//         const products = await Product.findById(req.params.id);
//         res.status(200).json(products);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Server Error');
//     }
// });

//update a product by id
// app.put('/api/update-product/:id', async (req, res) => {
//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.status(200).json(updatedProduct);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Server Error');
//     }
// });

//update multiple documents
// app.put('/api/update-many', async (req, res) => {
//     try {
//         const { filter, update } = req.body;

//         const updatedProducts = await Product.updateMany(filter, update);

//         res.status(200).json(updatedProducts);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("An error occurred");
//     }
// });



//create a product
// app.post('/api/add-product', async (req, res) => {
//     try {
//         const newProduct = await Product.create(req.body);
//         res.status(201).json(newProduct);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Server Error');
//     }
// });

//delete a product by filter
// app.delete('/api/delete-first-match', async (req, res) => {
//     try {
//         const deletedProduct = await Product.deleteOne(req.body);
//         res.status(201).json(deletedProduct)
//     }
//     catch (error) {
//         res.status(500).send('An Error Occured')
//     }
// });

//delete all matching products by filter
// app.delete('/api/delete-all', async (req, res) => {
//     try {
//         const deleteAllProducts = await Product.deleteMany(req.body);
//         res.status(201).json(deleteAllProducts)

//         if (!deleteAllProducts) {
//             res.send("Products doesn't exist")
//         }
//     }
//     catch (error) {
//         res.status(500).send('An Error Occured')
//     }
// });

//delete a product by id
// app.delete('/api/delete/:id', async (req, res) => {
//     try {
//         const deletedProductById = await Product.findByIdAndDelete(req.params.id);
//         if (!deletedProductById) {
//             return res.status(404).json({ message: 'Product not found' });
//         }
//         res.status(200).json(deletedProductById)
//     }
//     catch (error) {
//         console.log(error)
//         res.status(500).send('An Error Occured')
//     }
// });

