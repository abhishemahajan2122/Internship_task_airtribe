const express = require("express");
const bodyParser = require("body-parser");
const tables = require("./table");

const app = express();
app.use(bodyParser.json());
app.get("/createdb", tables.createDatabase);
app.get("/createinstructor", tables.createInstructorTable);
app.get("/createCourses", tables.createCoursesTable);
app.get("/createLeads", tables.createLeads);
app.get("/comments", tables.comments);

app.get("/insert", (req, res) => {
	const instructorId = 1;
	const coursesToAdd = ["Course A", "Course B", "Course C"];

	insertCourses(instructorId, coursesToAdd);
	res.send("Data Inserted");
});

module.exports = app;
