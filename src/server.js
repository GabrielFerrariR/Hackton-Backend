const app = require("./api");
const connectToDatabase = require("./models/connection");
require("dotenv/config");

const port = process.env.PORT || 3001;

connectToDatabase()
	.then(() => {
		app.start(port);
	})
	.catch((error) => {
		console.log("Connection with database generated an error:\r\n");
		console.error(error);
		console.log("\r\nServer initialization cancelled");
		process.exit(0);
	});