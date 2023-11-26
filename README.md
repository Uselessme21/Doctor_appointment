# Doctor_appointment


This project implements the backend for an Doctor appointment using Node.js, Express.js, and MongoDB. It provides APIs for user registration, authentication, flight management, and booking functionalities.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Folder Structure](#folder-structure)


# Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (Make sure MongoDB Atlas string is working)

# Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Uselessme21/Doctor_appointment.git
    ```

2. **Navigate to the project folder:**

    ```bash
    cd Doctor_appointment
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up MongoDB:**
    - Update the MongoDB connection string and other required variables in `.env` or your preferred configuration file.
    - Ensure MongoDB Atlas connection is stablished.

# Usage

1. **Start the server:**

    ```bash
    npm run server
    ```

   The server will be running on `http://localhost:[your port number]`. provide the port in `.env`.

2. **API Testing:**

   Use tools like [Postman](https://www.postman.com/) or any other API testing tool to test the implemented APIs.

# API Documentation

#### Sign Up

- **Endpoint:**
  - `POST /api/signup`

- **Request:**
  ```json
  {
    "email": "user@example.com",
    "password": "securepassword",
    "confirmPassword": "securepassword"
  }
  ```

- **Response (Success):**
  ```json
  {
    "message": "User registration successful"
  }
  ```


#### Log In

- **Endpoint:**
  - `POST /api/login`

- **Request:**
  ```json
  {
    "email": "user@example.com",
    "password": "securepassword"
  }
  ```

- **Response (Success):**
  ```json
  {
    "token": "generatedToken"
  }
  ```


### Appointment & Doctors

#### Get Doctors

- **Endpoint:**
  - `GET /api/doctors`

- **Request Headers:**
  - `Authorization: Bearer <token>` (Include the JWT token obtained during login)

- **Response (Success):**
  ```json
  {
    "doctors": [
      {
        "id": "doctorId1",
        "name": "Dr. John Doe",
        "image": "String",
        "specialization": "new",
        "experience": 6,
        "location": "Delhi",
        "date": 4,
        "slots": 6,
        "fee":4000
      },
    ]
  }
  ```


#### Book an Appointment

- **Endpoint:**
  - `POST /api/appointments`

- **Request Headers:**
  - `Authorization: Bearer <token>` (Include the JWT token obtained during login)

- **Request:**
  ```json
  {
    "name":"doctor name",
    "image": "String",
    "specialization": "new",
    "experience": 6,
    "location": "Delhi",
    "date": 4,
    "slots": 6,
    "fee":4000
  }
  ```

- **Response (Success):**
  ```json
  {
    "message": "Appointment booked successfully"
  }
  ```


#### Update Doctor Information

- **Endpoint:**
  - `PUT /api/update/:id`

- **Request Headers:**
  - `Authorization: Bearer <token>` (Include the JWT token obtained during login)

- **Request:**
  ```json
  {
    "name": "Dr. Updated Doe",
    "image": "String",
    "specialization": "new",
    "experience": 6,
    "location": "Delhi",
    "date": 4,
    "slots": 6,
    "fee":4000
  }
  ```

- **Response (Success):**
  ```json
  {
    "message": "Doctor information updated successfully"
  }
  ```

#### Delete Doctor

- **Endpoint:**
  - `DELETE /api/delete/:id`

- **Request Headers:**
  - `Authorization: Bearer <token>` (Include the JWT token obtained during login)

- **Response (Success):**
  ```json
  {
    "message": "Doctor deleted successfully"
  }
  ```

# folder structure
- config/
  - db.js
- controller/
  - auth.controller.js
  - flight.controller.js
  - booking.controller.js
- middleware/
  - auth.middleware.js
  - error.middleware.js
- model/
  - user.model.js
  - flight.model.js
  - booking.model.js
- router/
  - auth.router.js
  - flight.router.js
  - booking.router.js
- index.js
- package.json
- README.md

