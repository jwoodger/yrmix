import express from "express";

import routes from "./routes";

const app = express();
app.use("/api", routes);

const port = process.env.BACKEND_PORT;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
