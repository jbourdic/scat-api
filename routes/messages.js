var express = require('express');
var router = express.Router();
var messages = require('../controllers/messages.js');
/* GET home page. */
router.route('/messages')
    .get(messages.list)
    .post(messages.create)
;

router.route('/messages/:id')
    .get(messages.get)
    .put(messages.update)
    .delete(messages.delete)
;


module.exports = router;
