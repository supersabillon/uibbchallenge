var express = require('express');
var AWS = require('aws-sdk');
AWS.config.region = 'us-west-2';

var app = express();

app.get('/', function(req, res){
	res.sendfile('./index.html');
});

app.listen(80);
console.log('Listening on port 80');