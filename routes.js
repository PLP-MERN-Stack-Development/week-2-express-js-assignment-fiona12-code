const Products = require("./Products");
const express = require("express");
const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  try {
    const allProducts = await products.find();
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific product
router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// Create a new product
router.post("/", async (req, res, next) => {
  try {
    const { name, description, price, category, inStock } = req.body;

    // Validate required fields
    if (!name || !description || !price || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProduct = new Product({
      id: Date.now().toString(),
      name,
      description,
      price,
      category,
      inStock: inStock || false,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    next(error);
  }
});

// Update a product
router.put("/:id", async (req, res, next) => {
  try {
    const { name, description, price, category, inStock } = req.body;

    const updatedProduct = await Product.findOneAndUpdate(
      { id: req.params.id },
      { name, description, price, category, inStock },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
});

// Delete a product
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedProduct = await Product.findOneAndDelete({
      id: req.params.id,
    });

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
});

// Search products by name
router.get("/search", async (req, res, next) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res
        .status(400)
        .json({ message: "Name query parameter is required" });
    }

    const products = await Product.find({
      name: { $regex: name, $options: "i" },
    });

    res.json(products);
  } catch (error) {
    next(error);
  }
});

// Filter products by category
router.get("/filter", async (req, res, next) => {
  try {
    const { category } = req.query;
    if (!category) {
      return res
        .status(400)
        .json({ message: "Category query parameter is required" });
    }

    const products = await Product.find({ category });
    res.json(products);
  } catch (error) {
    next(error);
  }
});

// Export the router
module.exports = router;
