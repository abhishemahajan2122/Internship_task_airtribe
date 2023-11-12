const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
});
db.connect((err) => {
	if (err) {
		throw err;
	}
	console.log("Mysql Connected");
});

app.get("/createdb", (req, res) => {
	let sql = "Create Database airtribe";
	db.query(sql, (err) => {
		if (err) {
			throw err;
		}
		res.send("Database Created");
	});
});
app.use(bodyParser.json());
