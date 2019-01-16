var express = require('express');
var router = express.Router();
var db = require('../models/db');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', function(req, res) {
    var login_sql = "SELECT * FROM test0 ";
    db.query(login_sql,[],function (rows) {
        console.log(rows);
        res.render('index',{info:rows})
    })

});


module.exports = router;