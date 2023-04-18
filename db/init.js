const adminDb = db.getSiblingDB("admin");

adminDb.createUser({
	user: process.env.MONGO_USER,
	pwd: process.env.MONGO_PASSWORD,
	roles: [{ role: "userAdminAnyDatabase", db: "admin" }],
});
adminDb.auth({
	user: process.env.MONGO_USER,
	pwd: process.env.MONGO_PASSWORD,
});

const yrmixDb = new Mongo().getDB("yrmix");
yrmixDb.createCollection("songs", { capped: false });

const songs = require("/docker-entrypoint-initdb.d/songs.json");
yrmixDb.songs.insertMany(songs);
