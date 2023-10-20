import express from "express";
import mongoose, { model, Schema } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import product from "./models/product.js";


const app = express();
app.use(express.json());

const PORT = 5000;

// mongodb connection
const MONGODB_URI =''
const connectMongoDb = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    if (conn) {
        console.log('Mongodb connected succesfully.');
    }
};
connectMongoDb();

app.get('/health',(req, res) => {
    res.json({
        message: 'all good',
    })
});


// Post products
app.post('/product',async(req, res) => {
    const {name,description,price, productImage,brand} = req.body;
    let newProduct =new product({
        name:name,
        description:description,
        price:price,
        productImage:productImage,
        brand:brand,
    })
    const saveProduct = await newProduct.save();


    res.json({
        message: 'e-commerce products',
        data:saveProduct,
    })
});

app.get('/products',async (req,res)=>{

    const findProduct = await  product.find()

    res.json({
        data:findProduct,
        message:"get products data  successfully"
    })


});
app.get('/product', async (req,res) => {

   const {name} =req.query;
   const  findProductData = await product.findOne( {name:name}    
    )
    res.json({
        data:findProductData,
        message: 'get product successfully'
    })
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`);
});