

module.exports = function() {
    var mongoose = require('mongoose');

// Bootstrap connection to mongodb
    var db = mongoose.connect('mongodb://localhost:27017/scat', function(err) {
        if (err) {
            console.error('\x1b[31m', 'Could not connect to MongoDB!');
            console.log(err);
        }
    });
};