var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
global.__root   = __dirname + '/'; 
var bodyParser = require('body-parser');
var pinController = require(__root + 'controllers/PinController');
var sequelize = require(__root + 'config/db');
var path = require('path');
//express init
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//router init
app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});

app.use('/api/v1', pinController);

//start db and server
sequelize.sync().then(result =>{
  app.listen(port, function() {
    console.log('Express server listening on port ' + port);
  });
}).catch(err => {
  console.log(err);
});