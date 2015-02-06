var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('<h1>Joel Sabillon</h1>');
});


var server = app.listen(80, function(){
	console.log("Listening on port 80");
});