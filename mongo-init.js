db = db.getSiblingDB("yrmix");

db.createUser({
	user: process.env.MONGO_USER,
	pwd: process.env.MONGO_PASSWORD,
	roles: [{ role: "readWrite", db: "yrmix" }],
});

db.songs.insertMany([
	{ name: "Here Comes the Sun", artist: "The Beatles" },
	{ name: "Smooth Operator", artist: "Sade" },
]);
