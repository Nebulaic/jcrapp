var express = require('express');
var router = express.Router();
var User = require('../server/models/user');

router.route('/users')
    .post((req, res) => {
        var user = new User();
        user.name = req.body.name;
        user.save((err) => {
            if (err)
                res.send(err);
            res.json({message: 'User created!'});
        });
    });

module.exports = router;