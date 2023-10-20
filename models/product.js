import { Schema, model } from "mongoose";
// schema
// name,description,price, productImage,brand
const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    productImage: String,
    brand: String,
    
});
// model

const product = model('Product', productSchema);
export default product;