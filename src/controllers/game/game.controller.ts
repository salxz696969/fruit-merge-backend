import { Request, Response } from "express";
import { GameSession } from "../../mongoose/game_session.model";

export const createGameSession = async (_req: Request, res: Response) => {
  try {
    const session = await GameSession.create({});
    return res.status(201).json({ gameSessionId: session._id });
  } catch (error) {
    return res.status(500).send("Error creating game session");
  }
};
