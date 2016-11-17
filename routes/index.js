var express = require('express');
var router = express.Router();
var index = require('../controllers/index.js');
/* GET home page. */
router.route('/').get(index.home);

module.exports = router;
