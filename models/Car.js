const Sequelize = require("sequelize");
const db = require("../config/database");

const Car = db.define(
	"Car",
	{
		make: {
			type: Sequelize.STRING,
		},
		model: {
			type: Sequelize.STRING,
		},
		year: {
			type: Sequelize.STRING,
		},
		price: {
			type: Sequelize.STRING,
		},
	},
	{
		tableName: "cars",
	}
);

module.exports = Car;
