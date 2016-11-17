var mongoose = require('mongoose');
var Message = mongoose.model('Message');

var messages = {

    list: function(req, res) {
        Message.find(function (err, messages) {
            if (!err) {
                res.status(200).json(messages);
            } else {
                res.status(500).json(err);
            }
        });
    },

    get: function(req, res) {
        var id = req.params.id;
        Message.findOne({_id: id}, function (err, message) {
            if (!err) {
                res.status(200).json(message);
            } else {
                res.status(500).json(err);
            }
        });
    },

    create: function(req, res) {
        var message = new Message(req.body);
        message.save(function (err, result) {
            if (!err) {
                res.status(200).json(result);
            } else {
                res.status(500).send(err);
            }
        });
    },

    update: function(req, res) {
        var message = Message.findOne({_id: req.params.id}, function(err, message) {
            message = req.body;
            message.save(function (err2, result) {
                if (!err2) {
                    res.status(200).json(result);
                } else {
                    res.status(500).send(err2);
                }
            })
        });
    },

    delete: function(req, res) {
        Message.remove({_id: req.params.id}), function (err, result) {
            if (!err) {
                res.status(200).json(result);
            } else {
                res.status(500).send(err);
            }
        };
    }
};

module.exports = messages;