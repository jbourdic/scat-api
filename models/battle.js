var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var battleSchema = new Schema({
    title:  String,
    user1: String,
    user2: String,
    punchlines:   [
        { type: Schema.ObjectId, ref: 'Punchline' }
    ],
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    hidden: Boolean,
    accepted: Boolean,
    ended: Boolean,
    winner: String,
    comments: [{
        user: String,
        body: String
    }],
    meta: {
        goods: Number,
        bads: Number,
        favs:  Number
    }
});

mongoose.model('Battle', battleSchema);