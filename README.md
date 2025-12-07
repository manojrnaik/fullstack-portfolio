# fullstack-portfolio
Full-stack developer portfolio app using React, Spring Boot, MySQL, MongoDB, JWT Authentication

---

# Full-Stack Portfolio Application

## Overview
This is a **full-stack portfolio web application** built to showcase my projects.  
It demonstrates **frontend, backend, database integration, and authentication** skills.

**Features:**
- User registration & login (JWT authentication)
- Password hashing with BCrypt
- Add, update, delete, and view projects (CRUD)
- Projects stored in **MongoDB**
- Users stored in **MySQL**
- Protected dashboard for adding/editing projects
- React frontend consuming Spring Boot backend APIs

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, HTML, CSS, Axios, React Router |
| Backend | Java, Spring Boot, Spring Security, JWT |
| Database | MySQL (Users), MongoDB (Projects) |
| Authentication | JWT, BCrypt password hashing |

---

## Folder Structure


frontend/
│── public/
│── src/
│     ├── pages/ (Home, Login, Dashboard)
│     ├── components/ (Navbar, ProjectCard)
│     ├── api/ (Axios instance)
│     ├── App.js
│     └── index.js

backend/
│── src/main/java/com/portfolio/
│     ├── controller/ (AuthController, ProjectController)
│     ├── models/ (User, Project, DTOs)
│     ├── repository/ (UserRepository, ProjectRepository)
│     ├── security/ (JwtUtil, JwtFilter)
│     ├── service/ (ProjectService, ProjectServiceImpl)
│     └── config/ (SecurityConfig)


---

## How to Run Locally

### Backend
1. Clone the repo
2. Open backend folder in IDE
3. Add application.properties with DB connection & JWT secret
4. Run mvn spring-boot:run or run PortfolioApplication.java

### Frontend
1. Open frontend folder
2. Run npm install (if using Node locally)
3. Run npm start (if using Node locally)
4. Open browser at http://localhost:3000

---

## Key Learning Outcomes

- Full-stack development with React + Spring Boot  
- JWT Authentication & Security  
- Integration of multiple databases (MySQL + MongoDB)  
- Professional project structure suitable for industry  
- RESTful API development and consumption  

---

## Author

**Manoj Ramakant Naik** – Software Engineer | Full-Stack Developer

---
