# README for Personal Blog Platform

## Project Overview

The **Personal Blog Platform** is a web application where users can create, view, and manage blog posts. The platform is designed for seamless user experience across devices, combining a responsive front end with a robust backend for efficient data handling.

### Features

- **Create and Manage Blogs**: Users can write, edit, and delete blog posts.
- **User Authentication**: Secure login and session management.
- **Responsive Design**: Optimized for both desktop and mobile.
- **Hosting**: Deployed on [Render](https://render.com) for global accessibility.

### Live Demo

Access the live version: [My Personal Blog](https://my-personal-blog-1-su18.onrender.com)

---

## Folder Structure

```
personal-blog-platform/
├── backend/
│   ├── server.js       # Backend server entry point
│   ├── routes/         # API routes
│   ├── controllers/    # Business logic for API endpoints  
│   ├── package-lock-json        
│   ├── package.json   # Backend dependencies
│
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── HomePage.css       # Page-level components
│   │   ├── HomePage.js
|   |   ├── CreatePost.css
|   |   ├── CreatePost.js
|   |   ├── Login.css
|   |   ├── Login.js
|   |   ├── Navbar.css
|   |   ├── Navbar.js
|   |   ├── PostDetails.css
|   |   ├── PostDetails.js
|   |   
|   |       
│   ├── public/         # Static assets
│   ├── package.json    # Frontend dependencies
│
├── README.md           # Project overview and setup
```

---

## Authentication Credentials

For development purposes, authentication uses the following setup:



- **User Credentials**:
  - **Username**: `VenuPrasad`
  - **Password**: `VenuPrasad@123`

*Note: These are sample credentials for testing. Use environment variables to manage sensitive data in production.*

---

## Installation and Setup

### Prerequisites

Ensure the following tools are installed:

- **Node.js** (v14 or later)
- **npm** (v6 or later)
- **Git**

### Steps to Run the Application Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/personal-blog-platform.git
   cd personal-blog-platform
   ```

2. **Backend Setup**:
   ```bash
   cd backend
   npm install
   npm start
   ```
   The backend server will run on `http://localhost:5000`.

3. **Frontend Setup**:
   ```bash
   cd ../frontend
   npm install
   npm start
   ```
   The frontend server will run on `http://localhost:3000`.

### Build for Production

To create a production-ready frontend build:
```bash
npm run build
```
The optimized build will be in the `build/` directory.

---

## Deployment

The application is deployed on [Render](https://render.com). 


## Technology Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js


## Contact

- **Name**: Mupparapu VenuPrasad
- **Email**: mupparapuvenuprasad@gmail.com
- **GitHub**: (https://github.com/Venu-Prasad2)

