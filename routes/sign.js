var express = require('express');
var router = express.Router();
var db =  require('../models/db');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('sign','');
});
router.post('/',function (req,resp) {

    let userName = req.body.userName;
    let passWord = req.body.passWord;
    let select_sql='select * from  table1 where name=? ';
    db.query(select_sql,[userName],function (rows) {
       if(rows!=null&&rows.length==0){
               let login_sql = " INSERT INTO table1(name,password) VALUES(?,?)";
               db.query(login_sql, [userName, passWord], function (err, result) {
                   if (!err) {
                       console.log("注册失败");
                   }
                   resp.redirect('login');
               });
           }

       else{
           req.flash("err","用户名不唯一");
           resp.redirect('/sign');
       }
    });

});
module.exports = router;
