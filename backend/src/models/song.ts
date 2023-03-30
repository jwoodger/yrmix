import { getModelForClass, prop } from "@typegoose/typegoose";

class Song {
	@prop({ required: true })
	name!: string;

	@prop({ required: true })
	artist!: string;
}

export const SongModel = getModelForClass(Song);

export default Song;
