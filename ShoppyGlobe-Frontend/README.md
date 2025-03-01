# ShoppyGlobe - Full Stack E-Commerce Application

## Overview

ShoppyGlobe is a full-stack e-commerce application built with **React, Redux, Node.js, Express, and MongoDB**. The application allows users to browse products, add items to their shopping cart, and manage their cart while ensuring authentication and authorization via JWT.

## Features

### Frontend (React + Redux)

- Product Listing with Search Feature
- Product Detail View
- Add to Cart, Update Quantity, and Remove Items
- Redux for State Management
- React Router for Navigation
- Code Splitting & Lazy Loading for Performance Optimization

### Backend (Node.js + Express + MongoDB)

- REST API with CRUD Operations
- JWT-based Authentication & Authorization
- MongoDB for Product and Cart Data Storage
- Secure User Authentication with Bcrypt
- API Error Handling & Validation

## Tech Stack

- **Frontend:** React, Redux, React Router, Axios, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt
- **Database:** MongoDB (via Mongoose)
- **Testing Tool:** ThunderClient

## Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB (Local or Atlas Cloud)

### Clone the Repository

```sh
git clone https://github.com/naim-haider/ShoppyGlobe.I.P
```

### Setup Backend

```sh
cd ShoppyGlobe-Backend
npm install
```

#### Create a `.env` file in the `backend` directory and add:

```
MONGO_URI=your_own_mongo_connection_string
JWT_SECRET=your_own_secret_key
```

```sh
npm start
```

The backend will run on `http://localhost:5000`

### Setup Frontend

```sh
npm install
npm run dev
```

The frontend will run on `http://localhost:5174`

## API Routes

### Authentication

- `POST /api/register` - Register a new user
- `POST /api/login` - Login and receive a JWT token

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID

### Cart (Protected Routes - Requires JWT)

- `POST /api/cart` - Add product to cart
- `PUT /api/cart/:id` - Update product quantity in cart
- `DELETE /api/cart/:id` - Remove product from cart

## Testing API with ThunderClient

- Use ThunderClient to test API routes.
- Ensure to include JWT token in Authorization headers for protected routes.

## Future Enhancements

- Checkout page
- User Profiles
- Admin Dashboard for Product Management
