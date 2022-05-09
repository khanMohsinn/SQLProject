const db = require("./config/database");
const Car = require("./models/Car");

const connection = async () => {
	try {
		await db.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}

	const car = await Car.build({
		make: "BMW",
		model: "X5",
		year: "2020",
		price: "80 Lacs",
	});
	car.save()
		.then(() => console.log("Data has been saved"))
		.catch((err) =>
			console.log("Failed to save the data due to the error : ", err)
		);
};

connection();
