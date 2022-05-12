const Sequelize = require("sequelize");
const db = require("../config/database");

const DepartmentModel = db.define(
	"Department",
	{
		departmentId: {
			field: "department_id",
			type: Sequelize.INTEGER,
			primaryKey: true,
		},
		departmentName: {
			field: "department_name",
			type: Sequelize.STRING,
		},
		locationID: {
			field: "location_id",
			type: Sequelize.STRING,
		},
	},
	{
		timestamps: false,
		tableName: "departments",
	}
);

module.exports = DepartmentModel;
