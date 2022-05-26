var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require("body-parser");

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));


var user = {
	"user4" : {
	   "name" : "mounir",
	   "password" : "password4",
	   "profession" : "teacher",
	   "id": 4
	}
};

app.post('/adduser', function (req, res) {
	// First read existing users.
	fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
	   data = JSON.parse( data );
	   data["user4"] = user["user4"];
	   console.log( data );
	   res.end(JSON.stringify(data) );
	});
});

app.get('/listusers', function (req, res) {
	fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
		console.log(data);
		res.end(data);
	});
});



var server = app.listen(8080, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("listening at http://%s:%s", "0.0.0.0", port)
});
