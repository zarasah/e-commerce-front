# E-commerce for Clothes Store/ frontend

## Description

The project is built using React, Redux Toolkit, Redux Saga, React Router DOM, and Material-UI.

## Project Overview

The E-commerce for Clothes Store is a web application designed for selling clothes online. It provides a user-friendly interface for customers to browse and purchase clothes, as well as for admins to manage products, inventory, and orders.

## Features

* User Authentication: Users can create accounts, log in, and log out. 
* Product Listing: Display a catalog of clothes with details such as name, price, description, and product images. Users can browse, search, and filter products based on various criteria.
* Product Details: Show comprehensive information about each product.
* Shopping Cart: Provide a shopping cart functionality where users can add, update, and remove items. The cart displays the selected products, their quantities, and the total price. Users can proceed to checkout or continue shopping.
* Admin Dashboard: Provide an admin dashboard for managing products, categories, inventory, and orders. Admins can add new products, update existing ones.
* Search Functionality: Implement a search feature that enables users to find products quickly by entering keywords.

## Technologies/libraries used

* React
* Redux Toolkit
* Redux Saga
* React Router DOM
* Material UI

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


# E-Commerce Back-End

## Description

This project was built to help you start an e-commerce platform for a clothing store. It provides a boilerplate for creating an eCommerce backend with features like user registration and authentication, product management, cart management.

## Features

* User Authentication: Users can create an account, log in, and obtain authentication tokens for secure access to protected routes.
* Authorization: Role-based access control allows for different levels of access and permissions based on user roles (e.g., admin, regular user).
* Email Confirmation: An email confirmation process is implemented to verify user email addresses during the registration process.
* Product Management: CRUD operations are available for managing products, including creating, updating, retrieving, and deleting product information.
* Category Management: CRUD operations allow for the management of categories, including creating, updating, retrieving, and deleting category information.
* Cart Management
* CartItems Management
* User Management: Administrators can perform user management tasks, such as updating, retrieving, and deleting user accounts.
* MySQLdatabase with Sequelize ORM
* Seeding

## Technologies/libraries used

* Node.js
* Express.js
* nodemon
* MySQL
* Sequelize
* JSON Web Tokens (JWT)
* Bcrypt
* dotenv
* CORS
* Multer
* Nodemailer

### Installing

```
git clone https://github.com/zarasah/e-commerce-server.git
cd .. e-commerce-server
npm install
```

## Getting Started

To get started with the e-commerce back-end, please follow these steps:

### Prerequisites

Make sure you have the following software installed on your machine:

* Node.js: You can download it from the official website: https://nodejs.org
* MySQL: You can download the MySQL Community Server from the official website: https://www.mysql.com

### Configuration

* Create a new MySQL database for the application.
* Create the .env file to and create the following configuration variables in the .env file:
DB_USER: MySQL username
DB_PASSWORD: MySQL password
DB_DATABASE: MySQL database name

### Database Migration

The application uses Sequelize migrations to manage the database schema. To run the migrations, execute the following command:

```
npm run migrate
```

### Starting the Server

Start the server by running the following command:

```
npm run dev
```

The server will start running on http://localhost:4001/

## API Documentation
The following endpoints are available in the e-commerce back-end:

### Authentication

* "POST /register": This endpoint accepts a JSON payload containing the user's registration information, such as email and password. It is used to create a new user account in the system.
* "POST /login": User login endpoint. It accepts a JSON payload containing the email and password of the user and returns an authentication token if the login is successful.

### Products

* "GET /product": Get all products.
* "GET /product/:id": Get a specific product by ID.
* "POST /product/create": Create a new product. Requires authentication.
* "PUT /products/update?id=id": Update a specific product by ID. Requires authentication.
* "DELETE /product?id=id": Delete a specific product by ID. Requires authentication.

### Categories

* "GET /category": Get all categories.
* "GET /category/:id": Get a specific category by ID.
* "POST /category/create": Create a new category. Requires authentication.
* "PUT /category/update?id=id": Update a specific category by ID. Requires authentication.
* "DELETE /category?id=id": Delete a specific category by ID. Requires authentication.

Please note that for the endpoints that require authentication, you need to include the Authorization header in the request with the value of <token>, where <token> is the authentication token obtained during the login process.

