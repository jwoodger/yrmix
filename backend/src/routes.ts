import express from "express";

import { songById } from "./controllers/song-controllers";

export const songRoutes = express.Router();

songRoutes.get("/song/:id", songById);
