import { Router } from "express";
import {
	myAllTimeHighestScore,
	myAllTimeLeaderboard,
	myThisWeekHighestScore,
	myTodaysHighestScore,
	postScore,
} from "../controllers/leaderboard/my_leaderboard.controller";

const router = Router();

router.get("/:username/today", myTodaysHighestScore);
router.get("/:username/week", myThisWeekHighestScore);
router.get("/:username/all-time", myAllTimeHighestScore);
router.get("/:username/leaderboard", myAllTimeLeaderboard);

router.post("/score", postScore);

export default router;
