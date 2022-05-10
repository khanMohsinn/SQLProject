const Sequelize = require("sequelize");
const db = require("../config/database");
const Department = require("../models/Department");

const Employee = db.define(
	"employees",
	{
		employeeId: {
			field: "employee_id",
			type: Sequelize.INTEGER,
			primaryKey: true,
		},
		firstName: {
			field: "first_name",
			type: Sequelize.STRING,
		},
		lastName: {
			field: "last_name",
			type: Sequelize.STRING,
		},
		jobId: {
			field: "job_id",
			type: Sequelize.INTEGER,
		},
		email: {
			field: "email",
			type: Sequelize.STRING,
		},
		departmentId: {
			field: "department_id",
			type: Sequelize.INTEGER,
			references: {
				model: "departments",
				key: "department_id",
			},
		},
	},
	{
		timestamps: false,
		associate: (model) => {
			Employee.belongsTo(model.Department, {
				foreignKey: "department_id",
			});
		},
	}
);

module.exports = Employee;
