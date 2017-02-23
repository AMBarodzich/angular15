var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var mongoose = require('mongoose');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended : true
}));

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '../client/index.html');
});

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header("Access-Control-Allow-Headers",
			"X-Requested-With,X-Powered-By,Content-Type");
	if (req.method === 'OPTIONS') {
		res.status(200).end();
	} else {
		next();
	}
});

app.use('/', routes);

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;
