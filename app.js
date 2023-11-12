const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
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
app.use(bodyParser.json());

app.get("/createdb", (req, res) => {
	let sql = "Create Database airtribe";
	db.query(sql, (err) => {
		if (err) {
			throw err;
		}
		res.send("Database Created");
	});
});
app.get("/createinstructor", (req, res) => {
	let sql =
		"CREATE TABLE Instructors (instructor_id INT PRIMARY KEY AUTO_INCREMENT,name VARCHAR(255),email VARCHAR(255)";
	db.query(sql, (err) => {
		if (err) {
			throw err;
		}
		res.send("Database Created");
	});
});
app.get("/createcourses", (req, res) => {
	let sql =
		"CREATE TABLE Courses (course_id INT PRIMARY KEY AUTO_INCREMENT,instructor_id INT,name VARCHAR(255),max_seats INT,start_date DATE,FOREIGN KEY (instructor_id) REFERENCES Instructors(instructor_id))";
	db.query(sql, (err) => {
		if (err) {
			throw err;
		}
		res.send("Database Created");
	});
});
app.get("/leads", (req, res) => {
	let sql =
		" CREATE TABLE Leads (lead_id INT PRIMARY KEY AUTO_INCREMENT,course_id INT,name VARCHAR(255),email VARCHAR(255),phone_number VARCHAR(20),linkedin_profile VARCHAR(255),status VARCHAR(20),FOREIGN KEY (course_id) REFERENCES Courses(course_id));";
	db.query(sql, (err) => {
		if (err) {
			throw err;
		}
		res.send("Database Created");
	});
});

app.get("/LeadsComments", (req, res) => {
	let sql =
		"CREATE TABLE LeadComments (comment_id INT PRIMARY KEY AUTO_INCREMENT,lead_id INT,instructor_id INT,comment_text TEXT,created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,FOREIGN KEY (lead_id) REFERENCES Leads(lead_id),FOREIGN KEY (instructor_id) REFERENCES Instructors(instructor_id))";
	db.query(sql, (err) => {
		if (err) {
			throw err;
		}
		res.send("Database Created");
	});
});

app.listen(3000, () => {
	console.log(`Server is running on port 3000`);
});
