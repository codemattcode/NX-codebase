var express = require('express');
var router = express.Router();

/* GET index.ejs. */
router.get('/', function(req, res) {
  res.render('index', { 
    title: 'Hello World!',
    message: 'You are so blue, green and beautiful' 
  });

});

module.exports = router;
