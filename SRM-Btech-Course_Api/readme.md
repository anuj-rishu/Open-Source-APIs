# SRM BTech Course API

A REST API that provides information about BTech courses offered at SRM University. The API allows you to retrieve the list of all available BTech courses, search for specific courses, create new courses, and seed the database with predefined course data.

## API Endpoints

**Base URL:** `https://srm-course-api.vercel.app/api/courses/btech`

| Method | Endpoint | Description                                   |
| ------ | -------- | --------------------------------------------- |
| GET    | `/`      | Get all BTech courses                         |
| GET    | `/:name` | Get a specific course by name                 |
| POST   | `/`      | Create a new course                           |
| POST   | `/seed`  | Seed the database with predefined course data |

## Usage Examples

### Get All Courses

```sh
curl -X GET https://srm-course-api.vercel.app/api/courses/btech/
```

### Get a Specific Course

```sh
curl -X GET https://srm-course-api.vercel.app/api/courses/btech/Computer-Science
```

### Create a New Course

```sh
curl -X POST https://srm-course-api.vercel.app/api/courses/btech/ \
     -H "Content-Type: application/json" \
     -d '{"name": "Artificial Intelligence", "department": "CSE"}'
```

### Seed the Database

```sh
curl -X POST https://srm-course-api.vercel.app/api/courses/btech/seed
```

## Available Courses

The API includes a comprehensive list of BTech courses offered at SRM University, including:

- Computer Science and Engineering specializations
- Mechanical Engineering programs
- Electronics and Communication Engineering
- Electrical Engineering
- Biotechnology
- Civil Engineering
- And many more specialized fields

## Local Development

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository

```sh
git clone https://github.com/anuj-rishu/Open-Source-APIs/tree/main/SRM-Btech-Course_Api
cd SRM-Btech-Course_Api
```

2. Install dependencies

```sh
npm install
```

3. Create a `.env` file with your MongoDB connection string

```sh
MONGO_URI=your_mongodb_connection_string
```

4. Start the server

```sh
npm start
```

By default, the server will run on port `3000`. If the database is empty, it will automatically seed it with predefined course data.

## Deployment

This API is deployed on Vercel. The `vercel.json` file contains the necessary configuration for deployment.

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- Vercel (hosting)
