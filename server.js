'use strict';

var express = require('express');
var morgan = require('morgan');
var methodOverride = require('method-override');

var app = express();

app.use(morgan('combined'));
app.use(methodOverride('_method'));

app.get('/', function(req, res) {
  res.send(req.method + ' ' + req.route.path);
  //res.render('index.html.ejs', {});
});

app.get('/burgers', /*db.showBurgers,*/ function(req, res) {
  res.send(req.method + ' ' + req.route.path);
  //res.render('burgers.html.ejs', {/*add data of burgers*/});
});

app.post('/burgers', /*db.addBurger,*/ function(req, res) {
  res.send(req.method + ' ' + req.route.path);
  //res.redirect('/burgers');
});

app.get('/burgers/new', function(req, res) {
  res.send(req.method + ' ' + req.route.path);
  //res.render('new-burger.html.ejs', {});
});

app.get('/burgers/:id', /*db.showOneBurger,*/ function(req, res) {
  res.send(req.method + ' ' + req.route.path);
  //res.render('one-burger.html.ejs', {/*add data of burger*/});
});


app.get('/burgers/:id/edit', /*db.showOneBurger,*/ function(req, res) {
  res.send(req.method + ' ' + req.route.path);
  //res.render('edit-burger.html.ejs', {});
});

var port = process.argv[2] || 3000;
var server = app.listen(port, ()=> console.log('server started on port ' + port));
