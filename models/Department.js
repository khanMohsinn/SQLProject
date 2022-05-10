const Sequelize = require("sequelize");
const db = require("../config/database");

const Department = db.define(
	"department",
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
		associate: (model) => {
			Department.hasMany(model.employees, {
				foreignKey: "department_id",
			});
		},
	}
);

module.exports = Department;
