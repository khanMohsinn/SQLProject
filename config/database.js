const Sequelize = require("sequelize");

module.exports = new Sequelize("hr", "postgres", "root", {
	host: "localhost",
	dialect: "postgres",
});
