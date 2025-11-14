## What We're Building

A web app where users can submit ideas and upvote their favorites.
* Core concept: list ideas, add new ones, and vote.
* We'll work through this together using AI tools (Claude, ChatGPT, etc.).
* The focus is on your process and how you collaborate—not getting everything perfect.

`Expected Time:` 60-90 minutes

---

## Tech Stack
- `Backend:` Node + Express
- `Database:` Postgres
- `Frontend:` React (Vite recommended)
- `Language:` TypeScript preferred, JavaScript fine
- `Setup:` Docker Compose

Use whatever patterns and libraries make sense to you and your AI pair. Raw SQL or ORM, your call.

---

## Core Features

1. `Display Ideas`
   - Show all ideas with title, description, and vote count
   - Sort by most votes (newest first for ties)

2. `Add Ideas`
   - Form with title (required) and description (optional)
   - Appears immediately after creation

3. `Vote on Ideas`
   - Upvote button for each idea
   - Vote count updates and persists across restarts
   - No authentication needed

4. `Search/Filter`
   - Text input to filter ideas by title or description

5. `Basic Feedback`
   - Loading states, error messages, empty state

---

## Stretch Goals (Optional)
- Sort toggle: "Newest" or "Top Voted"
- Edit or delete ideas

---

## What We're Looking For
- Practical working code over perfect code
- It's fine if you don't finish everything, this is just an exploration.

---

## Deliverable
Something you can run locally:
```bash
docker-compose up      # Database
npm run dev            # Backend and frontend
```

Setup details, database initialization, and project structure are up to you and your AI collaborator.
