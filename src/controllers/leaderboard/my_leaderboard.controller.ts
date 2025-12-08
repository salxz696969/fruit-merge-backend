import { Request, Response } from "express";
import { UserSubmission } from "../../mongoose/user_submission.model";

export const myTodaysHighestScore = async (req: Request, res: Response) => {
	try {
		const startOfDay = new Date();
		startOfDay.setHours(0, 0, 0, 0);
		const name = req.params.name;
		const submissions = await UserSubmission.find({ name, date: { $gte: startOfDay } })
			.sort({ score: -1 })
			.limit(10)
			.exec();
		return res.status(200).json(submissions);
	} catch (error) {
		return res.status(500).send("Error retrieving today's highest scores");
	}
};

export const myAllTimeHighestScore = async (req: Request, res: Response) => {
	try {
		const name = req.params.name;
		const submissions = await UserSubmission.find({ name }).sort({ score: -1 }).limit(10).exec();
		return res.status(200).json(submissions);
	} catch (error) {
		return res.status(500).send("Error retrieving all-time highest scores");
	}
};

export const myThisWeekHighestScore = async (req: Request, res: Response) => {
	try {
		const lastWeek = new Date();
		lastWeek.setDate(lastWeek.getDate() - 7);
		const name = req.params.name;
		const submissions = await UserSubmission.find({ name, date: { $gte: lastWeek } })
			.sort({ score: -1 })
			.limit(10)
			.exec();
		return res.status(200).json(submissions);
	} catch (error) {
		return res.status(500).send("Error retrieving this week's highest scores");
	}
};

export const myAllTimeLeaderboard = async (req: Request, res: Response) => {
	try {
		const { name } = req.params;
		const topSubmissions = await UserSubmission.find({ name }).sort({ score: -1 }).limit(10).exec();
		return res.status(200).json(topSubmissions);
	} catch (error) {
		return res.status(500).send("Error retrieving leaderboard");
	}
};

export const postScore = async (req: Request, res: Response) => {
	try {
		const { name, score, date } = req.body;
		if (!name || typeof score !== "number") {
			return res.status(400).send("'name' and numeric 'score' are required");
		}
		const submissionDate = date ? new Date(date) : new Date();
		if (Number.isNaN(submissionDate.getTime())) {
			return res.status(400).send("Invalid date format");
		}
		await UserSubmission.create({ name, date: submissionDate, score });
		return res.status(201).send("Score posted successfully");
	} catch (error) {
		return res.status(500).send("Error posting score");
	}
};
