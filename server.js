var express = require('express');
var app = express();
var bodyParser = require("body-parser")
var mkdirp = require('mkdirp');

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(express.static(__dirname + '/public'));

app.post('/test', function(req, res){
	
	mkdirp("C:\\tttttttttttt"+"/source/",function(err){
		 if (err) console.log(err);
		res.json({});
	});
	
	
	
	
	
	
	
});

app.listen(process.env.PORT || 4000);
module.exports = {app}

