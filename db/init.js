const yrmixDb = new Mongo().getDB("yrmix");

yrmixDb.createUser({
	user: process.env.MONGO_USER,
	pwd: process.env.MONGO_PASSWORD,
	roles: [{ role: "readWrite", db: "yrmix" }],
});
yrmixDb.auth({
	user: process.env.MONGO_USER,
	pwd: process.env.MONGO_PASSWORD,
});

yrmixDb.createCollection("songs", { capped: false });

const songs = require("/docker-entrypoint-initdb.d/songs.json");
yrmixDb.songs.insertMany(songs);
