const express = require("express");
const db = require("./db");

const router = express.Router();

router.post("/create-course", (req, res) => {
	const { name, maxSeats, startDate } = req.body;

	if (!name || !maxSeats || !startDate) {
		return res.status(400).send("Invalid input data");
	}

	const sql =
		"INSERT INTO Courses (name, max_seats, start_date) VALUES (?, ?, ?)";
	db.query(sql, [name, maxSeats, startDate], (err, result) => {
		if (err) {
			console.error("Error creating course:", err);
			return res.status(500).send("Internal Server Error");
		}

		res.send("Course created successfully");
	});
});

router.put("/update-course/:courseId", (req, res) => {
	const courseId = req.params.courseId;
	const { name, maxSeats, startDate } = req.body;
	if (!name && !maxSeats && !startDate) {
		return res.status(400).send("No update data provided");
	}

	let sql = "UPDATE Courses SET ";
	const values = [];
	if (name) {
		sql += "name=?, ";
		values.push(name);
	}
	if (maxSeats) {
		sql += "max_seats=?, ";
		values.push(maxSeats);
	}
	if (startDate) {
		sql += "start_date=?, ";
		values.push(startDate);
	}

	sql = sql.slice(0, -2);
	sql += " WHERE course_id = ?";

	values.push(courseId);

	db.query(sql, values, (err, result) => {
		if (err) {
			console.error("Error updating course details:", err);
			return res.status(500).send("Internal Server Error");
		}

		res.send(`Course ${courseId} details updated successfully`);
	});

	res.send(`Course ${courseId} details updated successfully`);
});

module.exports = router;
