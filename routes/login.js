var express = require('express');
var router = express.Router();
var db =  require('../models/db');
router.get('/',function (req,res,next) {
        db.query("select * from table1", function (rows) {
            console.log(rows);
        });
        res.render('login', '');
    }
);
router.post('/',function (req,resp) {
    let userName = req.body.userName;
    let passWord = req.body.passWord;
    let login_sql = "select * from  table1 where name=? and password = ?";
        db.query(login_sql,[userName,passWord], function (rows) {
        console.log(rows);
        if(rows != null && rows.length > 0){
            //登录成功
            resp.redirect('/');
        }else{
            //登录失败

            req.flash("err", "登录失败");
            resp.redirect('login');
        }
    });
});
module.exports = router;