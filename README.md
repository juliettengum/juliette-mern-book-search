## JULIETTE MERN Book Search

# Description
This project is a book search engine that allows users to search for books using the Google Books API. Users can sign up, log in, and save their favorite books. The application is built with the MERN stack (MongoDB, Express.js, React, Node.js) and uses GraphQL with Apollo Server for the API.

## Table of Contents
# Description
# Installation
# Usage
# Deployment
# Features
# Technologies
# Contributing
# License
# Contact

## Installation
Prerequisites
Make sure you have the following software installed on your machine:

Node.js
* npm (Node Package Manager)
* MongoDB (local or cloud instance)
# Steps
*Clone the repository:*
```
git clone https://github.com/your-username/mern-book-search.git
cd mern-book-search
```
*Install dependencies for the server:*
```
cd server
npm install
```
*Install dependencies for the client:*
```
cd ../client
npm install
```
*Create a `.env` file in the server directory and add your environment variables:*
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```
## Usage
*Running the Application Locally
*Start the MongoDB server (if running locally):*
```
mongod
```
*Start the server:*
```
cd server
npm start
```
*Start the client:*
```
cd ../client
npm run dev
```
* Open your browser and navigate to` http://localhost:3000` to see the application.

## Deployment
# Deploying the Server on Render
Create a new Web Service on Render.
Connect your GitHub repository.
Set the build and start commands:
   * Build Command: cd server && npm install
   * Start Command: cd server && npm start
Add environment variables (MONGODB_URI, JWT_SECRET).
Deploy the service.

## Deploying the Client on Render
Create a new Static Site on Render.
Connect your GitHub repository.
Set the build command:
  * Build Command: cd client && npm install && npm run build
Set the publish directory:
  * Publish Directory: client/dist
Deploy the static site.

## Features

* Search for books using the Google Books API.
* User authentication (sign up, log in, log out).
* Save books to a personal list.
* View saved books.
* Remove books from the saved list.

## Technologies

* Frontend: React, Vite, CSS
* Backend: Node.js, Express.js, MongoDB, Mongoose, GraphQL, Apollo Server
* Authentication: JSON Web Tokens (JWT)
* Deployment: Render

## Contributing

Contributions are welcome! Please follow these steps:

* Fork the repository.
* Create a new branch (git checkout -b feature/YourFeature).
* Commit your changes (git commit -m 'Add some feature').
* Push to the branch (git push origin feature/YourFeature).
* Open a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any questions or suggestions, feel free to contact me:

GitHub: your-username
Email: `juliettengum19@gmail.com`



## Link to Deployed Application
[Link](https://mern-book-search-b6mz.onrender.com)

## Application Screenshots
### Homepage
![image](https://github.com/user-attachments/assets/53af0512-8ede-4889-82b2-da4ae3c23fb6)

### Login/Sign Up
![image](https://github.com/user-attachments/assets/88439c36-c9c2-4729-839c-21140adb2792)

![image](https://github.com/user-attachments/assets/5c02af5d-10a6-4dc6-81a4-accf6dedc9ef)

### Saved Books
![image](https://github.com/user-attachments/assets/bde5f86c-0e40-4187-ba4a-65c18720b02d)



