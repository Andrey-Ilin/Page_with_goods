var express = require('express');
var router = express.Router();
var mongojs = require("mongojs");

var db = mongojs('mongodb://andrey:andrey@ds111788.mlab.com:11788/clearoad', ['users']);

/* GET users listing. */
router.get('/', function(req, res, next) {

});

router.post('/register', function(req, res, next) {
    var newUserObj = req.body;

    db.users.find({email: newUserObj.email}, function (err, user) {
        if (err) {
            res.send(err)
        } else {
            if (user.length) {
                console.log(user);
                res.status(400);
                res.json({
                    "error": "This email associated with another account"
                });
                return;
            } else {
                db.users.save(newUserObj, function (err, result) {
                    if (err) {
                        res.send(err)
                    } else {
                        res.json(result)
                    }
                })
            }
        }
    });
});

router.post('/login',
    function(req, res) {
        db.users.find({email: req.body.email}, function (err, user) {
          if (err) {
              res.send(err);
          }
          if (!user.length) {
              res.status(400);
              res.json({
                  "error": "Invalid email"
              });
              return;
          }
          if (user[0].password != req.body.password) {
              res.status(400);
              res.json({
                  "error": "Invalid password"
              });
              return;
          }

          if (user[0].password == req.body.password) {
              res.send(user[0])
          }
        })
    });

router.get('/logout',
    function(req, res) {
        res.json({
            "message": "You are now logged out"
        });
        req.logout();
    });
module.exports = router;
