import express from "express";
import mongoose, { model, Schema } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(express.json());

const PORT = 5000;

// mongodb connection

const connectMongoDb = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    if (conn) {
        console.log('Mongodb connected succesfully.');
    }
};
connectMongoDb();


// get products
app.get('/products',(req, res) => {
    res.json({
        message: 'e-commerce products',
    })
});



app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`);
});