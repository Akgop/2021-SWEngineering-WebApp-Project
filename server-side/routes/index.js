var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var app = express();
var dbConfig = require('./dbConfig');
var dbOptions = {
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
};

var connection = mysql.createConnection(dbOptions);

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/* Landing Page GET method. */
router.get('/', function (req, res, next) {
  // 로그인 되지 않은 유저라면 자동으로 로그인 페이지로 넘김.
  if (!req.cookies.login) {
    res.redirect('/login');
  }
  else {
    var sql = "SELECT * FROM tbl_menu ";
    connection.query(sql, function (err, menu) {
      console.log(menu);
      res.render('index', {title: "RECIPES", menu: menu});
    });
  }
});


module.exports = router;
