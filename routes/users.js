var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
    console.log(JSON.stringify(req.headers));
    console.log(req.headers["x-forwarded-for"]);
    console.log(req.body["g-recaptcha-response"]);
    console.log(req.body["exampleInputEmail1"]);
    console.log(req.body["exampleInputPassword1"]);
  res.send('respond with login');
});

module.exports = router;
