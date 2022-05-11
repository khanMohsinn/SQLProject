const Sequelize = require("sequelize");
const db = require("../config/database");
const DepartmentModel = require("./Department");

const EmployeeModel = db.define(
	"Employees",
	{
		employeeId: {
			field: "employee_id",
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
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
			// references: {
			// 	model: DepartmentModel,
			// 	key: "departmentId",
			// },
		},
	},
	{
		timestamps: false,
		tableName: "employees",
	}
);

module.exports = EmployeeModel;
