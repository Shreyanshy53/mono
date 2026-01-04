# 📝 Smart ToDo API

A RESTful backend application for managing tasks with secure user authentication.  
This project demonstrates a complete **Node.js + Express + MongoDB** backend with **JWT authentication** and **CRUD operations**.

---

## 🚀 Features

- User Registration & Login
- JWT-based Authentication
- User-specific Task Management
- Full CRUD operations on tasks
- MongoDB NoSQL database integration
- Tested using Postman

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Authentication:** JWT (JSON Web Tokens)  
- **Database:** MongoDB (NoSQL)  
- **ODM:** Mongoose  
- **Testing:** Postman  

---

## 📂 Project Structure

```
smart-todo-api/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── task.controller.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── task.routes.js
│   └── app.js
│
├── server.js
├── package.json
├── README.md
└── Smart_ToDo_API.postman_collection.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone <your-github-repo-url>
cd smart-todo-api
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Environment Variables
Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

> ⚠️ Do not upload `.env` file to GitHub.

---

## ▶️ Run the Server

```bash
npm run dev
```

Server will start at:
```
http://localhost:5000
```

---

## 🔐 Authentication Flow

1. Register a user  
2. Login to receive JWT token  
3. Pass JWT token as **Bearer Token** in Authorization header  
4. Access protected task routes  

---

## 📌 API Endpoints

### 🔑 Auth Routes
| Method | Endpoint |
|------|---------|
| POST | `/auth/register` |
| POST | `/auth/login` |

---

### 📝 Task Routes (JWT Protected)
| Method | Endpoint |
|------|---------|
| POST | `/tasks` |
| GET | `/tasks` |
| PUT | `/tasks/:id` |
| DELETE | `/tasks/:id` |

---

## 📬 Postman Collection

A Postman collection is included in the repository:

```
Smart_ToDo_API.postman_collection.json
```

### How to Use:
1. Open Postman  
2. Import the collection  
3. Test all APIs (Register → Login → Tasks CRUD)  

---

## 🗄️ Database

- MongoDB (NoSQL)
- Two collections:
  - Users
  - Tasks
- Tasks are linked to users using user ID

---

## 👨‍💻 Author
**Shreyansh Yadav**
