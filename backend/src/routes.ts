import express from "express";

import { songById } from "./controllers/song-controllers";

// Router used to access the song API.
export const songRoutes = express.Router();
songRoutes.get("/song/:id", songById);
