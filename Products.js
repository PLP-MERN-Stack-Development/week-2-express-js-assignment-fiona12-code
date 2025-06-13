const mongoose = require("mongoose");

// Create a Mongoose schema for products
const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  inStock: { type: Boolean, required: true },
});

// Export the product model
const Product = mongoose.model("Products", productSchema);
module.exports = Product;
/* This code defines a Mongoose schema for products, which includes fields like id, name, description, 
/* price, category, and inStock status./* 
 /* The model is then exported for use in other parts of the application.*/
