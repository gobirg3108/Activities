# Mentor-Student Assignment API

This project provides a RESTful API for managing mentor and student assignments using Node.js, Express, and MongoDB.

## Project Structure


Sure, here's a simplified README.md file without examples:

markdown
Copy code
# Mentor-Student Assignment API

This project provides a RESTful API for managing mentor and student assignments using Node.js, Express, and MongoDB.

## Project Structure

Mentor-Student-DB/
├── models/
│ ├── mentor.js
│ └── student.js
├── routes/
│ ├── mentor.js
│ └── student.js
├── controllers/
│ ├── mentorController.js
│ └── studentController.js
├── .env
├── app.js
├── package.json
└── README.md


## Prerequisites

- Node.js
- MongoDB (local or MongoDB Atlas)
- Render account for deployment (optional)

## Installation

1. Clone the repository and navigate to the project directory.
2. Install dependencies with `npm install`.
3. Set up environment variables by creating a `.env` file in the root directory with `MONGODB_URI` and `PORT`.
4. Start the server with `node app.js`.

## Usage

- **Create a Mentor**: `POST /api/mentors`
- **Create a Student**: `POST /api/students`
- **Assign a Student to a Mentor**: `POST /api/mentors/assign-students`
- **Get Unassigned Students**: `GET /api/students/unassigned`
- **Assign or Change Mentor for a Student**: `POST /api/students/assign-mentor`
- **Show All Students for a Mentor**: `GET /api/mentors/:id/students`
- **Show Previously Assigned Mentors for a Student**: `GET /api/students/:id/previous-mentors`

## Deployment

1. Push your code to a GitHub repository.
2. Create a new web service on Render and connect it to your GitHub repository.
3. Set the environment variables on Render with your `.env` values.
4. Deploy your service.

## Environment Variables

Create a `.env` file in the root directory with the following content:



Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

## Conclusion

You have now set up and tested a RESTful API for managing mentor and student assignments using Node.js, Express, and MongoDB.
