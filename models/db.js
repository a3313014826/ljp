var mysql = require("mysql");
var db = {};
db.query = function (sql,queryarry, callback) {
  var connect = mysql.createConnection({
      host:"localhost",
      user: "root",
      password: "123456",
      database:"test_first",
      port:3306
  });
  connect.connect();
  connect.query(sql,queryarry,function (err, rows) {
     if(err) console.log(err);
      callback(rows);
  });
  connect.end();
};
module.exports = db;