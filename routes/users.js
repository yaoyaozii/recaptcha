var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
    console.log(JSON.stringify(req.headers));
    console.log(req.query["g-recaptcha-response"]);
  res.send('respond with login');
});

router.post('/login', function(req, res, next) {
    //console.log(req.body);
  res.send('respond with login');
});

module.exports = router;
