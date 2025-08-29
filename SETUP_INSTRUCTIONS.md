# Setup Instructions for Yogesh Portfolio Website

## Quick Setup Guide

### 1. Extract the ZIP file
```bash
unzip yogesh-portfolio-complete.zip
cd yogesh-portfolio
```

### 2. Backend Setup
```bash
cd server
npm install
```

**Create .env file in server directory:**
```env
MONGODB_URI=mongodb://localhost:27017/yogesh-portfolio
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

**Start backend server:**
```bash
npm run dev
```
Server will run on http://localhost:5000

### 3. Frontend Setup
```bash
cd ../client
npm install
npm start
```
Frontend will run on http://localhost:3000

### 4. Database Setup
- Install MongoDB locally OR use MongoDB Atlas
- For Atlas: Replace MONGODB_URI in .env with your Atlas connection string
- The app will automatically create the database and collections

## Project Features
- ✅ Responsive design with Tailwind CSS
- ✅ Contact form with backend validation
- ✅ Smooth animations and transitions
- ✅ Professional portfolio sections
- ✅ MongoDB integration for contact submissions
- ✅ Modern MERN stack architecture

## Customization
1. Update personal information in components
2. Add your own projects and experience
3. Customize colors in tailwind.config.js
4. Replace placeholder content with your details

## Deployment
- Frontend: Deploy to Vercel, Netlify, or any static hosting
- Backend: Deploy to Heroku, Railway, or any Node.js hosting
- Database: Use MongoDB Atlas for cloud database

## Support
For any issues, check the README.md file or contact:
Email: yogeshsadgir05@gmail.com
