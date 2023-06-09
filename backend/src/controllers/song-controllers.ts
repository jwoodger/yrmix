import { Response, Request, NextFunction } from "express";

import { SongModel } from "../models/song";

// Find a song, given the string representation of a Mongo ObjectID. If no song
// was found, an HTTP 204 response is sent. Otherwise, a JSON object containing
// the song data is the response.
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

export const createSong = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const name: string = req.body.name;
	const artist: string = req.body.artist;
	const song = new SongModel({ name: name, artist: artist });
	try {
		await song.save();
		return res.status(201).json({ id: song.id });
	} catch (err) {
		next(err);
	}
};
