var express = require('express');
var users = require('../controllers/users.js');
var router = express.Router();

/* GET users listing. */
router.route('/users').get(function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
