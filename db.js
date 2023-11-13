const mysql2 = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const db = mysql2.createConnection({
	host: "127.0.0.1",
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

db.connect((err) => {
	if (err) {
		throw err;
	}
	console.log("MySQL Connected");
});

module.exports = db;
