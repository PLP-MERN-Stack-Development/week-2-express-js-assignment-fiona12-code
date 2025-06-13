[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19753506&assignment_repo_type=AssignmentRepo)

# Express.js RESTful API Assignment

This assignment focuses on building a RESTful API using Express.js, implementing proper routing, middleware, and error handling.

## Assignment Overview

You will:

1. Set up an Express.js server
2. Create RESTful API routes for a product resource
3. Implement custom middleware for logging, authentication, and validation
4. Add comprehensive error handling
5. Develop advanced features like filtering, pagination, and search

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Run the server:
   ```
   npm start
   ```

## Files Included

- `Week2-Assignment.md`: Detailed assignment instructions
- `server.js`: Starter Express.js server file
- `.env.example`: Example environment variables file

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Postman, Insomnia, or curl for API testing

## API Endpoints

The API will have the following endpoints:

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a specific product
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all the required API endpoints
2. Implement the middleware and error handling
3. Document your API in the README.md
4. Include examples of requests and responses

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Design Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

# Product Management API

This is a RESTful API built with Express.js and MongoDB for managing products with CRUD operations, authentication, and advanced filtering.

## Features

- **Product Management**:
  - Create, read, update, and delete products
  - Search products by name
  - Filter products by category
- **Authentication**: API key protection
- **Error Handling**: Custom error middleware
- **Request Logging**: Automatic request logging

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Body-parser

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/week-2-express-js-assignment-fiona12-code
   cd product-api

   ```

2. Install dependencies
   ```bash
   npm install
   ```
3. Set up environment:

- Ensure MongoDB is running locally

- Create a .env file (use .env.example as reference)

4. Start the server:
   ```bash
   npm start
   ```

# API Endpoints

Products
Method Endpoint Description
GET /api/products Get all products
GET /api/products/:id Get a specific product
POST /api/products Create a new product
PUT /api/products/:id Update a product
DELETE /api/products/:id Delete a product
GET /api/products/search Search products by name (query: name)
GET /api/products/filter Filter by category (query: category)

# Authentication

All endpoints require an API key header:

```bash
x-api-key: fiona123456789
```

# Error Handling

The API returns appropriate HTTP status codes:

- 400 Bad Request - Invalid input data

- 401 Unauthorized - Missing or invalid API key

- 404 Not Found - Resource not found

- 500 Internal Server Error - Server error

# Running Tests

Use postman to test the api.

# License

This project is licensed under the MIT License.

# Author

- Mary Fiona Atieno
- Email: omondifiona77@gmail.com
- Github: https://github.com/fiona12-code
