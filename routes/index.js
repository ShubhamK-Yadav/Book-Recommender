var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Book Recommender' });
});

router.get('/sign-in', function(req, res, next){
  res.render('signin', {title: 'Sign-in'})
});

router.get('/sign-up', function(req, res, next){
  res.render('signup', {title: 'Sign-in'})
});

module.exports = router;