const db = require("../config/database");
const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

router.get("/", async (req, res) => {
	try {
		await db.authenticate();
		console.log("Connection has been established successfully.");
		const employee = await Employee.findAll({
			attributes: ["first_name", "last_name"],
		});
		res.status(200).send(employee);
	} catch (err) {
		console.error("Unable to connect to the database:", err);
		res.status(400).json(err);
	}
});

router.post("/", async (req, res) => {
	try {
		console.log(req.body);
		res.status(200).json({ Request: "Post" });
	} catch (err) {
		res.status(400).json(err);
	}
});

module.exports = router;
