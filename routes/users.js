var express = require('express');
var router = express.Router();

var userService = require('../services/user-service.js');



router.post('/create', function(req, res, next) {
    // console.log(req);
    userService.addUser(req.body, function(err) {
        if (err) {
            console.log("user create error");
        }

        res.send(200);
    })


});

router.post('/get', function(req, res, next) {
    // console.log(req);
    userService.findUser(req.body, function(err, user) {
        if (err) {
            console.log("user create error");
            res.sendStatus(500);
        } else {
            if (user === null) {
                res.sendStatus(412);
            } else {
                res.sendStatus(200);
            }
        }

    })
});

module.exports = router;