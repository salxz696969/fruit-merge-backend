import { Request, Response } from "express";
import { GameSession } from "../mongoose/game_session.model";

export const createGameSession = async (_req: Request, res: Response) => {
  try {
    const session = await GameSession.create({});
    return res.status(201).json({ gameSessionId: session._id });
  } catch (error) {
    return res.status(500).send("Error creating game session");
  }
};

export const updateScore = async (req: Request, res: Response) => {
  try {
    const sessionId = req.params.sessionId;
    const { score } = req.body;
    if (!sessionId || typeof score !== "number") {
      return res
        .status(400)
        .send("'sessionId' and numeric 'score' are required");
    }
    const submissionDate = new Date();
    if (Number.isNaN(submissionDate.getTime())) {
      return res.status(400).send("Invalid date format");
    }
    const updatedSession = await GameSession.updateOne(
      { _id: sessionId },
      { date: submissionDate, score }
    );
    return res.status(200).json(updatedSession);
  } catch (error) {
    return res.status(500).send("Error updating score");
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

