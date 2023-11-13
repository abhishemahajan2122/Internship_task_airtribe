const express = require("express");
const db = require("./db");

const router = express.Router();

router.post("/course-registration", (req, res) => {
	const { name, email, phoneNumber, linkedInProfile, courseId } = req.body;
	if (!name || !email || !phoneNumber || !linkedInProfile || !courseId) {
		return res.status(400).send("Invalid input data");
	}
	const sql =
		"INSERT INTO Leads (course_id, name, email, phone_number, linkedin_profile, status) VALUES (?, ?, ?, ?, ?, 'Pending')";
	db.query(
		sql,
		[courseId, name, email, phoneNumber, linkedInProfile],
		(err, result) => {
			if (err) {
				console.error("Error registering for the course:", err);
				return res.status(500).send("Internal Server Error");
			}

			res.send("Course registration successful");
		}
	);
});

module.exports = router;
