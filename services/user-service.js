var User = require('../models/user').User;

exports.addUser = function(user, next) {
    var newUser = new User({
        email: user.email,
        password: user.password
    });

    newUser.save(function(err) {
        if (err) {
            return next(err);
        }
        next(null);
    });
}

exports.findUser = function(user, next) {
    User.findOne({
        email: user.email.toLowerCase(),
        password: user.password
    }, function(err, user) {
        next(err, user);
    });
};
