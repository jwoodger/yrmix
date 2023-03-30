import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

import { songRoutes } from "./routes";

export const app = express();

export async function main() {
	// Set up routes.
	app.use("/api", songRoutes);

	// Set up error handler.
	app.use((err: Error, _res: Request, res: Response, _next: NextFunction) => {
		console.log(err);
		res.setHeader("Content-Type", "application/json");
		res.status(500);
		res.send(JSON.stringify(err));
	});

	// Connect to MongoDB
	const mongoUri = process.env.MONGODB_URI;
	console.log(`Attempting to connect to MongoDB at ${mongoUri}`);
	await mongoose
		.connect(mongoUri as string)
		.then((_) => console.log(`Connected to MongoDB at ${mongoUri}`))
		.catch((err) => console.log(err));

	// Start listening for API requests.
	const appPort = process.env.BACKEND_PORT;
	app.listen(appPort, () => {
		console.log(`Listening on port ${appPort}`);
	});
}

if (require.main == module) {
	main();
}
