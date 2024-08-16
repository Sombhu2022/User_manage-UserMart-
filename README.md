# Product Listing Web Application

## Overview

This project is a React-based web application that provides a seamless experience for browsing products. The app features user authentication, infinite scrolling for product listings, and detailed product pages. It leverages Redux for state management and integrates with a fake API for product data.

- **find your need:- https://usermart-demo.vercel.app/
## Features

### 1. User Authentication

- **Registration**: Users can register with their name, email, password, address, and location. The password is securely encrypted and stored in local storage.
- **Login**: Users can log in with their email and password. The app verifies the credentials against the stored data and allows access to product pages upon successful authentication.
- **Logout**: Users can log out, which clears their session and redirects them to the login page.

![Authentication](.public/images/authentication.png)

### 2. Product Listing 

- **Product List**: Authenticated users can view a list of products fetched from an API. The products are displayed in a grid format.

![Product List](.public/images/product-list.png)

### 3. Product Details Page

- **Product Details**: Clicking on a product leads to a detailed view of the product, including an image, title, category, price, rating, and description.
- **Similar Products Button**: A button on the product details page allows users to navigate back to the main product listing.

![Product Details](.public/images/product-details.png)

### 4. Authentication Check for Access

- **Access Restriction**: Users must be authenticated to view product details. If not authenticated, they are redirected to the login page with a message.

![Access Restriction](.public/images/access-restriction.png)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sombhu2022/User_manage-UserMart-