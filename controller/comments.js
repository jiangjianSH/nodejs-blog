var db = require('monogo');

exports.create = function(user, text, cb) {
    var comment = {
        user: user,
        text: text,
        date: new Date().toString()
    };
    
    db.save(comment, cb)
}


