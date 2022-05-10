const db = require("../config/database");
const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");
const Department = require("../models/Department");
const Sequelize = require("sequelize");

router.get("/", async (req, res) => {
	try {
		await db.authenticate();
		console.log("Connection has been established successfully.");
		Employee.belongsTo(Department, {
			foreignKey: "department_id",
		});
		Department.hasMany(Employee, {
			foreignKey: "department_id",
		});
		const employee = await Department.findAll({
			attributes: ["department_name"],
			include: {
				model: Employee,
				attributes: [
					["department_id", "DEPARTMENT ID"],
					["last_name", "EMPLOYEE NAME"],
					["hire_date", "START DATE"],
					["salary", "SALARY"],
					[Sequelize.literal("salary*12"), "ANNUAL SALARY"],
				],
			},
			where: {
				department_id: 3,
			},
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
