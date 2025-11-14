# Vote Board - Idea Voting Platform

A web application where users can submit ideas and upvote their favorites.

## Tech Stack

- **Backend:** Node.js + Express + TypeScript
- **Database:** PostgreSQL
- **Frontend:** React + Vite + TypeScript
- **Architecture:** Atomic Design Pattern

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose
- npm or yarn

### Setup

1. **Start the database:**
   ```bash
   docker-compose up -d
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install
   ```

4. **Start the backend server:**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:3001`

5. **Start the frontend development server:**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`

## Project Structure

```
.
├── backend/
│   ├── src/
│   │   ├── db.ts              # Database connection
│   │   ├── index.ts           # Express server setup
│   │   └── routes/
│   │       └── ideas.ts       # API routes
│   ├── db/
│   │   └── init.sql           # Database schema and seed data
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── atoms/         # Basic UI components
│   │   │   ├── molecules/     # Composite components
│   │   │   └── organisms/     # Complex components
│   │   ├── api.ts             # API client functions
│   │   ├── types.ts           # TypeScript types
│   │   ├── App.tsx            # Main app component
│   │   └── main.tsx           # Entry point
│   └── package.json
├── docker-compose.yml         # PostgreSQL container
└── README.md
```

## API Endpoints

- `GET /ideas` - Get all ideas (sorted by votes, then newest)
- `POST /ideas` - Create a new idea
- `POST /ideas/:id/vote` - Upvote an idea

## Features

- ✅ Display ideas with title, description, and vote count
- ✅ Add new ideas with title (required) and description (optional)
- ✅ Upvote ideas
- ✅ Search/filter ideas by title or description
- ✅ Loading states and error handling
- ✅ Empty state messages
- ✅ Responsive design

## Database Schema

```sql
CREATE TABLE ideas (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    votes INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

