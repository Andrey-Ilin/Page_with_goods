var express = require('express');
var router = express.Router();
var mongojs = require("mongojs");

var db = mongojs('mongodb://andrey:andrey@ds111788.mlab.com:11788/clearoad', ['users', 'goods']);

router.post('/register', function(req, res, next) {
    var newUserObj = req.body;

    db.users.find({email: newUserObj.email}, function (err, user) {
        if (err) {
            res.send(err);
        } else {
            if (user.length) {
                res.status(400);
                res.json({
                    "error": "This email associated with another account"
                });
                return;
            } else {
                db.users.save(newUserObj, function (err, result) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.json(result);
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

router.post('/goods', function(req, res, next) {
    var newProduct = req.body;

    db.goods.save(newProduct, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    })
});

router.put('/goods', function(req, res, next) { //TODO get method work wrong, maybe something with router

    db.goods.find(function (err, docs) {
        if (err) {
            res.send(err);
        } else {
            res.json(docs);
        }
    })
});

router.delete('/goods/:id', function(req, res, next) {

    db.goods.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, '', function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    })
});

router.put('/goods/:id', function(req, res, next) {
    var product = req.body;
    console.log(product)

    db.goods.update({
        _id: mongojs.ObjectId(req.params.id)
    }, product, {} , function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    })
});

router.put('/settings/:id', function(req, res, next) {
    var user = req.body;

    db.users.findAndModify({
        query: {_id: mongojs.ObjectId(req.params.id)},
        update: { $set: { email: user.email, firstName: user.firstName, lastName: user.lastName, phone: user.phone } },
        new: true
    }, function (err, docs) {
        if (err) {
            res.send(err);
        } else {
            res.json(docs);
        }
    })
});

router.put('/settings/password/:id', function(req, res, next) {
    var pass = req.body;

    db.users.findAndModify({
        query: {_id: mongojs.ObjectId(req.params.id)},
        update: { $set: { password: pass.password } },
        new: true
    }, function (err, docs) {
        if (err) {
            res.send(err);
        } else {
            res.json(docs);
        }
    })
});

module.exports = router;
