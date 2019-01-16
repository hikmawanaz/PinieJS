var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var db = require('./config/db');
global.__root   = __dirname + '/'; 

//var pinController = require(__root + 'Controller/PinController');


app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});
//app.use('/api/v1/pin', pinController);


var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});