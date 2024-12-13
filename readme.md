# Course Management API

## Overview
This is a comprehensive Course Management API built with Node.js, Express, and MongoDB. The API allows you to manage and retrieve a wide range of SRM engineering courses across various disciplines.

Live API: [api-for-the-srm-course.vercel.app](https://api-for-the-srm-course.vercel.app)

## 🚀 Features
- List all courses
- Retrieve courses by name
- Create new courses
- Automatic database seeding
- Modular project structure
- Error handling

## 📋 Prerequisites
- Node.js (v14 or later)
- MongoDB
- npm (Node Package Manager)

## 🛠️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/anuj-rishu/Api-for-the-SRM-Course
cd Api-for-the-SRM-Course
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure MongoDB
- Ensure MongoDB is installed and running
- Default connection: `mongodb://localhost:27017/course_db`
- Modify `config/database.js` if you need custom connection settings

## 🔧 Project Structure
```
course-api/
│
├── config/
│   └── database.js       # MongoDB connection configuration
│
├── models/
│   └── Course.js         # Mongoose schema for courses
│
├── controllers/
│   └── courseController.js  # API logic and database interactions
│
├── routes/
│   └── courseRoutes.js   # Express route definitions
│
├── utils/
│   └── seedData.js       # Initial course data
│
├── server.js             # Main application entry point
└── package.json
```

## 🚀 Running the Application
```bash
# Start the server
npm start
```

## 📡 API Endpoints

### Get All Courses
- **URL:** `/api/courses/btech`
- **Method:** `GET`
- **Success Response:** 
  - Code: 200
  - Content: Array of course objects

### Get Course by Name
- **URL:** `/api/courses/btech:name`
- **Method:** `GET`
- **Success Response:**
  - Code: 200
  - Content: Single course object

### Create New Course
- **URL:** `/api/courses/btech`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "New Course Name"
  }
  ```
- **Success Response:**
  - Code: 201
  - Content: Created course object

### Seed Database
- **URL:** `/api/courses/btech/seed`
- **Method:** `POST`
- **Success Response:**
  - Code: 201
  - Content: Confirmation message with course count

## 🧪 Example Requests
### Fetch All Courses
1. Open Postman.
2. Create a new GET request.
3. Enter the URL: `http://localhost:9000/api/courses/btech`.
4. Click Send.

### Create a Course
1. Open Postman.
2. Create a new POST request.
3. Enter the URL: `http://localhost:9000/api/courses/btech`.
4. Go to the Headers tab and add a new header with:
   - Key: `Content-Type`
   - Value: `application/json`
5. Go to the Body tab, select `raw` and `JSON` format, and enter the following JSON:
   ```json
   {
     "name": "Advanced Robotics"
   }
## 🛡️ Error Handling
- 404: Course not found
- 500: Server error
- 400: Bad request

## 📦 Dependencies
- Express.js
- Mongoose
- MongoDB

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License
Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact
Your Name - anujtiwari4454@outlook.com

Project Link: [https://github.com/anuj-rishu/Api-for-the-SRM-Course](https://github.com/yourusername/course-management-api)
