import { Router } from "express";

const routes = Router();

routes.get("/song/:id", (req, res) => {
	res.send(`Details of song ${req.params.id}`);
});

export default routes;
