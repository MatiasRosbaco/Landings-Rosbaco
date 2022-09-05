var express = require('express');
var app = express()
var router = express.Router();
const bodyParser = require("body-parser");
var path = require('path');
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/moodInversor', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views/moodinversor.html'));
});

module.exports = router;
