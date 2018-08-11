var express = require('express'); 
// could call the express variable anything you want - common practice to use same name as the package.
var app = express();

app.get('/hello', function (request, response) {
	response.send('Hello World!');
})

app.get('/chocolate', function (request, response) {
	response.send('Mmmm, chocolate...');
});

app.listen(8080, function() {
	console.log('Server has started listening on port 8080.');
});

