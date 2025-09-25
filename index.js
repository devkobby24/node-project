const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const dbconnect = process.env.DATABASE_URL;



app.get('/', function (req, res) {
    res.send("Hello World. I'm testing to see what happens when I change this text. Did it?");
})

app.listen(3000)

mongoose.connect(dbconnect)
    .then(() => console.log('Connected to DB succcessfully'))
    .catch(err => console.log(err));