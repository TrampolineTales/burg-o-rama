'use strict';

var express = require('express');
var router = express.Router();

var burgerData = [1, 2, 3];

router.get('/', /*db.showBurgers,*/ function(req, res) {
  res.send({data: burgerData});
  //res.render('burgers.html.ejs', {/*add data of burgers*/});
});

router.post('/', /*db.addBurger,*/ function(req, res) {
  burgerData.push(res.rows);
  res.redirect('/burgers/' + burgerData.length);
});

router.get('/new', function(req, res) {
  //res.render('new-burger.html.ejs', {});
});

router.get('/:id', /*db.showOneBurger,*/ function(req, res) {
  if (burgerData[req.params.id - 1] != undefined) {
    if (req.query._method == 'PUT') {
      res.redirect('/burgers/' + req.params.id);
    } else if (req.query._method == 'DELETE') {
      burgerData.splice(req.params.id - 1, 1);
      res.redirect('/burgers');
    } else {
      res.send({data: burgerData[req.params.id - 1]});
    }
    //res.render('one-burger.html.ejs', {/*add data of burger*/});
  } else {
    res.sendStatus(404);
  }
});


router.get('/:id/edit', /*db.showOneBurger,*/ function(req, res) {
  //res.render('edit-burger.html.ejs', {});
});

module.exports = router;
