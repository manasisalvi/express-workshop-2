var express = require('express'); //adding the express module
var fs = require('fs'); //adding the fs module
// could call the express variable anything you want - common practice to use same name as the package.
var app = express();

app.use(express.static("public"));
//tells app to use this middleware function and point it at the the folder public
//Whenever a GET request is received it will first check the public folder to see if a file
//exists with the matching URL


app.get('/get-posts', function(request, response){ //handler function for /get-posts
	fs.readFile(__dirname+'/data/posts.json', function(error, data){
		if(error){ //check if there's an error
			console.log('Error reading posts.json: '+error); //if there is, log it and send it back as error response
			response.status(500);
			response.sent(error);
		} else {
			response.send(data.toString());// else convert the data buffer to a string and send that as a response
		}
	});
});

app.listen(8080, function() {
	console.log('Server has started listening on port 8080.');
});

