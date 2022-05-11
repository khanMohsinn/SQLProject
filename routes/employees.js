const db = require("../config/database");
const express = require("express");
const router = express.Router();
const EmployeeModel = require("../models/Employee");
const DepartmentModel = require("../models/Department");
const Sequelize = require("sequelize");
const LocationModel = require("../models/Location");
const { Op } = require("sequelize");
require("dotenv/config");

// Associations---------------------
EmployeeModel.belongsTo(DepartmentModel, {
	foreignKey: "department_id",
});
DepartmentModel.hasMany(EmployeeModel, {
	foreignKey: "department_id",
});
DepartmentModel.belongsTo(LocationModel, {
	foreignKey: "location_id",
});
LocationModel.hasMany(DepartmentModel, {
	foreignKey: "location_id",
});

//Query 1---------------------
router.get("/query1", async (req, res) => {
	try {
		await db.authenticate();
		console.log("Connection has been established successfully.");
		const queryResponse = await EmployeeModel.findAll({
			attributes: [["last_name", "EMPLOYEE NAME"]],
			where: {
				last_name: {
					[Op.like]: "%a%",
				},
			},

			include: {
				model: DepartmentModel,
				attributes: ["departmentName"],
			},
		});
		const queryStatement = { Question: process.env.QUERY1 };
		const newRes = { queryStatement, queryResponse };
		res.status(200).send(newRes);
	} catch (err) {
		console.error("Unable to connect to the database, ERROR : ", err);
		res.status(400).json(err);
	}
});

//Query 2---------------------
router.get("/query2", async (req, res) => {
	try {
		await db.authenticate();
		console.log("Connection has been established successfully.");
		const queryResponse = await LocationModel.findAll({
			attributes: [
				["state_province", "PROVINCE"],
				["city", "CITY"],
			],
			where: db.where(db.fn("LOWER", db.col("city")), "toronto"),
			include: [
				{
					model: DepartmentModel,
					attributes: [["department_name", "DEPARTMENT NAME"]],
					include: [
						{
							model: EmployeeModel,
							attributes: [
								["last_name", "EMPLOYEE NAME"],
								["hire_date", "START DATE"],
								["salary", "SALARY"],
								[
									Sequelize.literal("salary*12"),
									"ANNUAL SALARY",
								],
							],
						},
					],
				},
			],
		});
		const queryStatement = { Question: process.env.QUERY2 };
		const newRes = { queryStatement, queryResponse };
		res.status(200).send(newRes);
	} catch (err) {
		console.error("Unable to connect to the database, ERROR : ", err);
		res.status(400).json(err);
	}
});

//Query 3--------------------
router.get("/query3", async (req, res) => {
	try {
		const queryResponse = await EmployeeModel.findAll({
			attributes: [
				[db.fn("MIN", db.col("salary")), "Min Salary of Employee"],
				"manager_id",
			],
			group: ["manager_id"],
			order: [[db.col("Min Salary of Employee"), "DESC"]],
			where: {
				salary: {
					[Op.gt]: 6000,
				},
				manager_id: {
					[Op.ne]: null,
				},
			},
		});
		const queryStatement = { Question: process.env.QUERY3 };
		const newRes = { queryStatement, queryResponse };
		res.status(200).send(newRes);
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
