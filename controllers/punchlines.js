var mongoose = require('mongoose');
var Punchline = mongoose.model('Punchline');

var punchlines = {

    list: function(req, res) {
        Punchline.find(function (err, messages) {
            if (!err) {
                res.status(200).json(messages);
            } else {
                res.status(500).json(err);
            }
        });
    },

    get: function(req, res) {
        var id = req.params.id;
        Punchline.findOne({_id: id}, function (err, message) {
            if (!err) {
                res.status(200).json(message);
            } else {
                res.status(500).json(err);
            }
        });
    },

    create: function(req, res) {
        var punchline = new Punchline(req.body);
        punchline.save(function (err, result) {
            if (!err) {
                res.status(200).json(result);
            } else {
                res.status(500).send(err);
            }
        });
    },

    update: function(req, res) {
        var punchline = Punchline.findOne({_id: req.params.id}, function(err, punchline) {
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
        Punchline.remove({_id: req.params.id}), function (err, result) {
            if (!err) {
                res.status(200).json(result);
            } else {
                res.status(500).send(err);
            }
        };
    }
};

module.exports = punchlines;