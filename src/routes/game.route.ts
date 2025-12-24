import { Router } from "express";
import {
  createGameSession,
  globalAllTimeLeaderboard,
  updateScore,
} from "../controllers/game.controller";

const router = Router();

// POST /game -> creates a new game session and returns its id
router.post("/", createGameSession);
router.put("/:sessionId/score", updateScore);
router.get("/leaderboard", globalAllTimeLeaderboard);

export default router;
