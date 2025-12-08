import mongoose, { Schema, Document } from "mongoose";

export interface UserSubmission extends Document {
	name: string;
	date: Date;
	score: number;
}

const UserSubmissionSchema: Schema = new Schema({
	name: { type: String, required: true },
	date: { type: Date, required: true },
	score: { type: Number, required: true },
});

export const UserSubmission = mongoose.model<UserSubmission>("user_submission", UserSubmissionSchema);