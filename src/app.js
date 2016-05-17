var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
app.set('views', './src/views');
app.set('view engine', 'jade');

app.use(express.static('img'));

app.get('/', function (request, response) {
	response.render('index');
});

var server = app.listen(3000, function () {
	console.log('Example app listening on port: ' + server.address().port);
});