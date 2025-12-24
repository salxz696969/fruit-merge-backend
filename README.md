# Fruit Merge Backend (TypeScript + Express + MongoDB)

Backend for the Fruit Merge game. It creates **game sessions** (MongoDB documents) and lets the client **update a session’s score**. Leaderboards are derived from stored game sessions.

## Requirements

- Node.js (recommended: latest LTS)
- MongoDB (local or hosted)

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root:

```bash
PORT=3000
MONGODB_URI="mongodb://127.0.0.1:27017/fruit-merge"
```

## Run

- Development (auto-restart):

```bash
npm run dev
```

- Start:

```bash
npm start
```

The server listens on `http://localhost:$PORT`.

## Data model

- **Collection**: `gameSession`
- **Document fields**:
  - `date` (Date): last updated time for the session
  - `score` (number): session score
  - `_id` (ObjectId): used as `gameSessionId`

## API

Base path: `/game`

### Create a game session

**POST** `/game`

Response:

```json
{ "gameSessionId": "..." }
```

### Update a session score

**PUT** `/game/:sessionId/score`

Body:

```json
{ "score": 123 }
```

Response: MongoDB update result.

### Global all-time leaderboard (top 10)

**GET** `/game/all-time`

Response: list of sessions with `_id` and `score`, sorted by score desc.

## Project structure

- `src/app.ts`: Express app + route mounting + MongoDB connect
- `src/routes/game.route.ts`: game endpoints
- `src/controllers/game.controller.ts`: handlers (create session, update score, leaderboard)
- `src/mongoose/mongoose.ts`: Mongo connection helper
- `src/mongoose/game_session.model.ts`: `GameSession` schema/model

## Notes

- `gameSessionId` is the Mongo `_id` generated when you create a session.
