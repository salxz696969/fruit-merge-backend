import { Request, Response } from "express";
import { GameSession } from "../../mongoose/game_session.model";

export const globalTodaysLeaderboard = async (_req: Request, res: Response) => {
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const submissions = await GameSession.find({
      date: { $gte: startOfDay },
    })
      .sort({ score: -1 })
      .limit(10)
      .exec();

    return res.status(200).json(submissions);
  } catch (error) {
    return res.status(500).send("Error retrieving today's global leaderboard");
  }
};

export const globalThisWeekLeaderboard = async (
  _req: Request,
  res: Response
) => {
  try {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const submissions = await GameSession.find({
      date: { $gte: sevenDaysAgo },
    })
      .sort({ score: -1 })
      .limit(10)
      .exec();

    return res.status(200).json(submissions);
  } catch (error) {
    return res
      .status(500)
      .send("Error retrieving this week's global leaderboard");
  }
};

export const globalAllTimeLeaderboard = async (
  _req: Request,
  res: Response
) => {
  try {
    const submissions = await GameSession.find({}, { _id: 1, score: 1 })
      .sort({ score: -1 })
      .limit(10)
      .exec();

    return res.status(200).json(submissions);
  } catch (error) {
    return res.status(500).send("Error retrieving all-time global leaderboard");
  }
};
