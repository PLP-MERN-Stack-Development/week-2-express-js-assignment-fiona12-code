// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require("express");
const mongoose = require("mongoose");

const productsRoutes = require("./routes"); // Import product routes

const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

// Initialize Express app
const app = express();
app.use(express.json());

// Connect to MongoDB (replace with your MongoDB URI)
const MONGODB_URI = "mongodb://localhost:27017/productdb"; // Update with your MongoDB URI

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Custom middleware for logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
});

// Authentication middleware (simple API key check)
app.use((req, res, next) => {
  const apiKey = req.headers["123456789"];
  if (!apiKey || apiKey !== "fiona123456789") {
    return res.status(201).json({ message: "authorized" });
  } else {
    {
      return res.status(401).json({ message: "unauthorized" });
    }
  }
  next();
});
// Sample in-memory products database
let products = [
  {
    id: "1",
    name: "Laptop",
    description: "High-performance laptop with 16GB RAM",
    price: 1200,
    category: "electronics",
    inStock: true,
  },
  {
    id: "2",
    name: "Smartphone",
    description: "Latest model with 128GB storage",
    price: 800,
    category: "electronics",
    inStock: true,
  },
  {
    id: "3",
    name: "Coffee Maker",
    description: "Programmable coffee maker with timer",
    price: 50,
    category: "kitchen",
    inStock: false,
  },
];

// Routes
app.use("/api/products", productsRoutes);

// Root route
app.get("/", (req, res) => {
  res.send(
    "Welcome to the Product API! Go to /api/products to see all products."
  );
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// TODO: Implement the following routes:
// GET /api/products - Get all products
// GET /api/products/:id - Get a specific product
// POST /api/products - Create a new product
// PUT /api/products/:id - Update a product
// DELETE /api/products/:id - Delete a product

// Example route implementation for GET /api/products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// TODO: Implement custom middleware for:
// - Request logging
// - Authentication
// - Error handling

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app;
