import { Router } from "express";
import {
  createGameSession,
  globalAllTimeLeaderboard,
  updateScore,
} from "../controllers/game.controller";

const router = Router();

// POST /game -> creates a new game session and returns its id
router.post("/", createGameSession);
router.get("/all-time", globalAllTimeLeaderboard);
router.put("/:sessionId/score", updateScore);

export default router;
