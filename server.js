var express = require('express'); 
// could call the express variable anything you want - common practice to use same name as the package.
var app = express();

app.use(express.static("public"));
//tells app to use this middleware function and point it at the the folder public
//Whenever a GET request is received it will first check the public folder to see if a file
//exists with the matching URL
app.listen(8080, function() {
	console.log('Server has started listening on port 8080.');
});

