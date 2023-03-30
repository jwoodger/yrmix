import { getModelForClass, prop } from "@typegoose/typegoose";

// A single song that can be added to a mixtape.
class Song {
	// The title of the song.
	@prop({ required: true })
	name!: string;

	// The name of the artist who recorded the song.
	@prop({ required: true })
	artist!: string;
}

// The model used to represent a Song.
export const SongModel = getModelForClass(Song);

export default Song;
