var path = require('path');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var port = process.env.PORT || 8080;
var INDEX = fs.readFileSync('./index.html', {
  encoding: 'utf8'
});
var BUNDLE = fs.readFileSync('./dist/bundle.js', {
  encoding: 'utf8'
});
var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded

app.use('/api', require('./api/api.js'));

app.use(morgan('combined'));
app.use(express.static(__dirname + '/dist'));
app.get('*/bundle.js', function(req, res) {
  res.send(BUNDLE);
})
app.get('*', function(req, res) {
  res.send(INDEX);
});
app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:', port);
});
