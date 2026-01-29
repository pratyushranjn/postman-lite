# Postman Lite REST Client

A lightweight REST client application similar to Postman, built with React and Express.

## GitHub Repository
🔗 [https://github.com/pratyushranjn/postman-lite](https://github.com/pratyushranjn/postman-lite)

## Features
- Send GET, POST, PUT, DELETE requests
- View real-time API responses without page reload
- Store request history using MikroORM + SQLite
- Pagination for large datasets
- React frontend + Express backend

## Tech Stack
React, Node.js, Express, Axios, MikroORM, SQLite

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