import mongoose, { Schema, Document } from "mongoose";

export interface GameSession extends Document {
  date: Date;
  score: number;
}

const GameSessionSchema: Schema = new Schema({
  date: { type: Date, required: true, default: Date.now },
  score: { type: Number, required: true, default: 0 },
});

// Explicitly set collection name to "gameSession"
export const GameSession = mongoose.model<GameSession>(
  "gameSession",
  GameSessionSchema,
  "gameSession"
);
