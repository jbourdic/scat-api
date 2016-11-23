var mongoose = require('mongoose');
var Battle = mongoose.model('Battle');

var battles = {

    list: function(req, res) {
        Battle.find(function (err, messages) {
            if (!err) {
                res.status(200).json(messages);
            } else {
                res.status(500).json(err);
            }
        });
    },

    get: function(req, res) {
        var id = req.params.id;
        Battle.findOne({_id: id}, function (err, message) {
            if (!err) {
                res.status(200).json(message);
            } else {
                res.status(500).json(err);
            }
        });
    },

    create: function(req, res) {
        var punchline = new Battle(req.body);
        punchline.save(function (err, result) {
            if (!err) {
                res.status(200).json(result);
            } else {
                res.status(500).send(err);
            }
        });
    },

    update: function(req, res) {
        var punchline = Battle.findOne({_id: req.params.id}, function(err, punchline) {
            punchline = req.body;
            punchline.save(function (err2, result) {
                if (!err2) {
                    res.status(200).json(result);
                } else {
                    res.status(500).send(err2);
                }
            })
        });
    },

    delete: function(req, res) {
        Battle.remove({_id: req.params.id}), function (err, result) {
            if (!err) {
                res.status(200).json(result);
            } else {
                res.status(500).send(err);
            }
        };
    }
};

module.exports = battles;