import dotenv from "dotenv";
import express from "express";

dotenv.config({
	path: ".env",
});

const app = express();

app.get("/", (_, res) => {
	res.send("Hello!");
});

const port = process.env.BACKEND_PORT;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
