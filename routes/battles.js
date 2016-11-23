var express = require('express');
var router = express.Router();
var battles = require('../controllers/battles.js');
/* GET home page. */
router.route('/battles')
    .get(battles.list)
    .post(battles.create)
;

router.route('/battles/:id')
    .get(battles.get)
    .put(battles.update)
    .delete(battles.delete)
;


module.exports = router;
