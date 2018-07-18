const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express(); //CONSTRUCTS A SERVER
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

// respond with "hello world" when a GET request is made to the homepage
app.get("/status", function (req, res) {
	res.send({
		message: "Hello World!"
	});
});

app.listen(process.env.PORT || 8081);