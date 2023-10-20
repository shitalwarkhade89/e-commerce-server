import express from "express";
import mongoose, { model, Schema } from 'mongoose';



const app = express();
app.use(express.json());

const PORT = 5000;


// get products
app.get('/products',(req, res) => {
    res.json({
        message: 'e-commerce products',
    })
});



app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`);
});