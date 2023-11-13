const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
const db = mysql.createConnection({
	host: process.env.MYSQL_HOST,
	port: "3307",
	user: "airtribe",
	password: "12345",
	database: "airtribe",
});

db.connect((err) => {
	if (err) {
		throw err;
	}
	console.log("MySQL Connected");
});

module.exports = db;
