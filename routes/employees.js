const db = require("../config/database");
const express = require("express");
const router = express.Router();
const EmployeeModel = require("../models/Employee");
const DepartmentModel = require("../models/Department");
const Sequelize = require("sequelize");

router.get("/", async (req, res) => {
	try {
		await db.authenticate();
		console.log("Connection has been established successfully.");
		EmployeeModel.belongsTo(DepartmentModel, {
			foreignKey: "department_id",
		});
		DepartmentModel.hasMany(EmployeeModel, {
			foreignKey: "department_id",
		});
		const query = await DepartmentModel.findAll({
			where: {
				department_id: 3,
			},
			attributes: ["departmentName"],

			include: {
				model: EmployeeModel,
				attributes: [
					"jobId",
					["department_id", "DEPARTMENT ID"],
					["last_name", "EMPLOYEE NAME"],
					["hire_date", "START DATE"],
					["salary", "SALARY"],
					[Sequelize.literal("salary*12"), "ANNUAL SALARY"],
				],
			},
			// required: true,
		});
		res.status(200).send(query);
	} catch (err) {
		console.error("Unable to connect to the database, ERROR : ", err);
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
