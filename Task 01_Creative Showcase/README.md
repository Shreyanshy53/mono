
# 🎨 Creative Showcase  
**Full Stack Web Application**

## 📌 Project Overview
Creative Showcase is a responsive full-stack web application designed for artists to upload, manage, and showcase their digital artwork or creative memories.  
The platform allows users to create accounts, upload images, maintain private dashboards, and share their work publicly through profile pages.

---

## 🚀 Live Hosted Link
🔗 **Frontend (Netlify):**  
https://creativesh0wcase.netlify.app/

---

## 🎯 Objective
To build a responsive website where users can:
- Upload and manage their digital artwork
- Explore artwork uploaded by other users
- Share a public profile showcasing their creations

---

## 📄 Pages Implemented

### 1️⃣ Landing Page
- Displays a collection of user-uploaded images
- Mosaic / gallery-style layout
- Login and SignUp options available
- Publicly accessible

### 2️⃣ SignUp Page
- New user registration
- Secure password hashing
- User data stored in database

### 3️⃣ Login Page
- Secure authentication using JWT
- Redirects to private dashboard after login

### 4️⃣ User Profile (Private Dashboard)
- Accessible only to logged-in users
- Image upload form
- Displays all images uploaded by the logged-in user

### 5️⃣ User Public Page
- Accessible via /profile/[username]
- Displays selected user’s images publicly
- Gallery/mosaic style image layout

---

## 🛠 Technologies Used

### Frontend
- HTML  
- CSS  
- JavaScript  
- React (Bonus Technology)  
- React Router

### Backend
- Node.js  
- Express.js  
- MongoDB with Mongoose  
- JWT Authentication  
- bcryptjs

### Cloud & Deployment
- Cloudinary (Image Storage)
- Netlify (Frontend Hosting)
- MongoDB Atlas

---

## 📂 Project Structure

CreativeShowcase/
│
├── client/
├── server/
└── README.md

---

## ⚙️ Environment Variables

Create a .env file inside the server directory:

PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret  
CLOUDINARY_CLOUD_NAME=your_cloud_name  
CLOUDINARY_API_KEY=your_api_key  
CLOUDINARY_API_SECRET=your_api_secret  

---

## ▶️ How to Run Locally

1. Clone Repository  
git clone https://github.com/your-username/CreativeShowcase.git

2. Backend  
cd server  
npm install  
npm run dev

3. Frontend  
cd client  
npm install  
npm run dev

---

## 👤 Author
Shreyansh Yadav  

---

