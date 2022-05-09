const Sequelize = require("sequelize");
const db = require("../config/database");

const Employee = db.define(
	"Employee",
	{
		employee_id: {
			type: Sequelize.NUMBER,
		},
		first_name: {
			type: Sequelize.STRING,
		},
		last_name: {
			type: Sequelize.STRING,
		},
		email: {
			type: Sequelize.STRING,
		},
		phone_number: {
			type: Sequelize.STRING,
		},
		hire_date: {
			type: Sequelize.STRING,
		},
		job_id: {
			type: Sequelize.STRING,
		},
		salary: {
			type: Sequelize.STRING,
		},
		manager_id: {
			type: Sequelize.STRING,
		},
		department_id: {
			type: Sequelize.STRING,
		},
	},
	{
		tableName: "employees",
	}
);

module.exports = Employee;
