var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/Rosbaco/moodInversor', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views/moodinversor.html'));
});

module.exports = router;
