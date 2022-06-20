const express = require('express')
const app = express()

app.get("/", (req, res) => {
	res.send("I am working");
})

app.listen(5000, () => {
	console.log("listening on port 5000");
})
