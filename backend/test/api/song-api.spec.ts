import { assert } from "chai";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { after, afterEach, before, describe, it } from "mocha";
import request from "supertest";

import { app, main } from "../../src/main";
import { SongModel } from "../../src/models/song";

describe("Song controllers", function () {
	let mongod: MongoMemoryServer;

	before(async function () {
		mongod = await MongoMemoryServer.create();
		process.env.MONGODB_URI = mongod.getUri();
		process.env.MONGO;

		await main();
	});

	afterEach(async function () {
		await mongoose.connection.db.dropDatabase();
	});

	after(async function () {
		await mongoose.disconnect();
		await mongod.stop();
	});

	it("fetches song data", async function () {
		const song = new SongModel({
			name: "foo",
			artist: "bar",
		});
		await song.save();

		const res = await request(app)
			.get(`/api/song/${song.id}`)
			.expect(200)
			.expect("Content-Type", /json/);

		const json = JSON.parse(res.text);
		assert.equal(json["name"], song.name);
		assert.equal(json["artist"], song.artist);
	});

	it("invalid id gives error", async function () {
		await request(app).get("/api/song/invalid").expect(500);
	});
});
