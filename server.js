'use strict';

var express = require('express');
var morgan = require('morgan');
var path = require('path');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();
var burgersRouter = require(path.join(__dirname, './routes/burgers'));

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.get('/', function(req, res) {
  res.send(req.method + '/');
  //res.render('index.html.ejs', {});
});

app.use('/burgers', burgersRouter);

var port = process.argv[2] || 3000;
var server = app.listen(port, ()=> console.log('server started on port ' + port));
