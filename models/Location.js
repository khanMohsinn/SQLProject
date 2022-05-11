const db = require("../config/database");
const Sequelize = require("sequelize");

const LocationModel = db.define(
	"location",
	{
		locationId: {
			field: "location_id",
			type: Sequelize.INTEGER,
			primaryKey: true,
		},
		city: {
			field: "city",
			type: Sequelize.STRING,
		},
		stateProvince: {
			field: "state_province",
			type: Sequelize.STRING,
		},
	},
	{
		tableName: "locations",
		timestamp: false,
	}
);

module.exports = LocationModel;
