# Course Selling App

A simple course-selling web application that supports two types of users: **Admins** and **Users**.  
Admins can create and manage courses, while Users can view and purchase them.  

This project uses **Node.js**, **Express**, and **MongoDB** for backend development.

---

## Features
### Admin Features:
- **Signup**: Create an admin account.
- **Create Courses**: Add new courses to the platform.
- **View Courses**: View all courses available on the platform.

### User Features:
- **Signup**: Create a user account.
- **View Courses**: Browse all available courses.
- **Purchase Courses**: Buy courses using their unique ID.
- **View Purchased Courses**: List all purchased courses.

---

## Tech Stack
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Libraries**: Mongoose

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<repository-name>.git
   cd <repository-name>
   
2. Install dependencies:
  ```bash
  npm install

3. Set up MongoDB:

  ->Create a MongoDB database and obtain the connection string.
  ->Add the connection string to your project.

4. Start the server:

  ```bash
  node server.js
  The app will run on http://localhost:3000
