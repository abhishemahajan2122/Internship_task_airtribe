// leads.js
const express = require("express");
const db = require("./db");

const router = express.Router();

router.put("/update-lead/:leadId", (req, res) => {
	const leadId = req.params.leadId;

	const { status } = req.body;

	if (!status) {
		return res.status(400).send("No update data provided");
	}

	const sql = "UPDATE Leads SET status=? WHERE lead_id=?";
	db.query(sql, [status, leadId], (err, result) => {
		if (err) {
			console.error("Error updating lead status:", err);
			return res.status(500).send("Internal Server Error");
		}

		res.send(`Lead ${leadId} status updated successfully`);
	});
});

router.get("/search-leads", (req, res) => {
	const searchTerm = req.query.term;

	const sql = "SELECT * FROM Leads WHERE name LIKE ? OR email LIKE ?";
	const searchPattern = `%${searchTerm}%`;
	db.query(sql, [searchPattern, searchPattern], (err, results) => {
		if (err) {
			console.error("Error searching leads:", err);
			return res.status(500).send("Internal Server Error");
		}

		res.json(results);
	});
});

router.post("/add-comment/:leadId", (req, res) => {
	const leadId = req.params.leadId;
	const { instructorId, commentText } = req.body;
	if (!instructorId || !commentText) {
		return res.status(400).send("Invalid input data");
	}

	const sql =
		"INSERT INTO LeadComments (lead_id, instructor_id, comment_text) VALUES (?, ?, ?)";
	db.query(sql, [leadId, instructorId, commentText], (err, result) => {
		if (err) {
			console.error("Error adding comment:", err);
			return res.status(500).send("Internal Server Error");
		}

		res.send(`Comment added to lead ${leadId}`);
	});
});

module.exports = router;
