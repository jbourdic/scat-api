var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var punchlineSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    hidden: Boolean,
    battle: String,
    meta: {
        goods: Number,
        bads: Number,
        favs:  Number
    }
});

mongoose.model('Punchline', punchlineSchema);