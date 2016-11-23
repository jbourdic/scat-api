var express = require('express');
var router = express.Router();
var messages = require('../controllers/punchlines.js');
/* GET home page. */
router.route('/punchlines')
    .get(messages.list)
    .post(messages.create)
;

router.route('/punchlines/:id')
    .get(messages.get)
    .put(messages.update)
    .delete(messages.delete)
;


module.exports = router;
