import { Router } from "express";
import {
	globalAllTimeLeaderboard,
	globalThisWeekLeaderboard,
	globalTodaysLeaderboard,
} from "../controllers/leaderboard/global_leaderboard.controller";

const router = Router();

router.get("/today", globalTodaysLeaderboard);
router.get("/week", globalThisWeekLeaderboard);
router.get("/all-time", globalAllTimeLeaderboard);

export default router;
