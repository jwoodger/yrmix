import { Response, Request, NextFunction } from "express";

import { SongModel } from "../models/song";

export const songById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const id: string = req.params.id;
	try {
		const song = await SongModel.findById(id);
		if (!song) {
			return res.status(204).json();
		}
		return res.json(song);
	} catch (err) {
		next(err);
	}
};
