const Product = require('../models/product.model.js');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

const getProductById = async (req, res) => {
    async (req, res) => {
        try {
            const products = await Product.findById(req.params.id);
            res.status(200).json(products);
        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    };
};


const updateProductById = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

const updateManyProducts = async (req, res) => {
    try {
        const { filter, update } = req.body;

        const updatedProducts = await Product.updateMany(filter, update);

        res.status(200).json(updatedProducts);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
};

const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

const deleteProductByFilter = async (req, res) => {
    try {
        const deletedProduct = await Product.deleteOne(req.body);
        res.status(201).json(deletedProduct)
    }
    catch (error) {
        res.status(500).send('An Error Occured')
    }
}

const deleteAllMatchingProducts = async (req, res) => {
    try {
        const deleteAllProducts = await Product.deleteMany(req.body);
        res.status(201).json(deleteAllProducts)

        if (!deleteAllProducts) {
            res.send("Products doesn't exist")
        }
    }
    catch (error) {
        res.status(500).send('An Error Occured')
    }
}

const deleteProductById = async (req, res) => {
    try {
        const deletedProductById = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProductById) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(deletedProductById)
    }
    catch (error) {
        console.log(error)
        res.status(500).send('An Error Occured')
    }
}

module.exports = { getProducts, getProductById, updateProductById, updateManyProducts, createProduct, deleteProductByFilter, deleteAllMatchingProducts, deleteProductById };