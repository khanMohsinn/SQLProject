const Sequelize = require("sequelize");

module.exports = new Sequelize("testdb", "postgres", "root", {
	host: "localhost",
	dialect: "postgres",
});
