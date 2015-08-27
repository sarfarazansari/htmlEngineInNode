var express = require('express');
var bodyParser = require('body-parser');
var engines = require('consolidate');

// set some dynamic variables
var port = process.env.PORT || 3000;

//make app
var app = express();

//set engine
app.engine('html', engines.mustache);
app.set('view engine', 'html');


/*for serve files*/
var options = {
  root: __dirname + '/public/view',
  dotfiles: 'deny',
  headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
  }
};

app.get('/', function(req, res, next) {
  res.sendFile("index.html", options1);
});

// another way if you have dynamic file name come in request
app.get('/home', function (req, res, next){
  var fileName = "index.html";
  res.sendFile(fileName, options);
});



//run app
app.listen(port);
console.log('Magic happens on port ' + port);

app.on('listening', function() {
    console.log('Express server started on port %s at %s');
});


module.exports = app;