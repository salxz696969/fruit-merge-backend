import { Router } from "express";
import { createGameSession } from "../controllers/game/game.controller";

const router = Router();

// POST /game -> creates a new game session and returns its id
router.post("/", createGameSession);

export default router;
