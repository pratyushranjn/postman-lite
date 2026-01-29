# Postman Lite REST Client

A lightweight REST client application similar to Postman, built with React and Express.

## Features
- Send HTTP requests (GET, POST, PUT, DELETE)
- Real-time API response rendering without page reload
- Request history stored in database using MikroORM
- Pagination implemented for handling large datasets efficiently
- Clean React frontend with Express backend architecture

## 🛠 Tech Stack

**Frontend:** React, JavaScript, CSS, Axios  
**Backend:** Node.js, Express.js  
**Database:** SQLite  
**ORM:** MikroORM 

## How to Run

**Server:**
```bash
cd server
npm install
node index.js
```
Server runs on `http://localhost:5000`

**Client:**
```bash
cd client
npm install
npm run dev
```
Client runs on `http://localhost:5173`

## API Endpoints
- `POST /send-request` - Send HTTP request and save to history
- `GET /history?page=1` - Get paginated request history

## Flow
Frontend → Backend → Axios → External API → Response → Backend → Frontend

## Project Structure

postman-lite/
- client/  # React frontend
- server/  # Express backend with MikroORM


## Author
Pratyush Ranjan