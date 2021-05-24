var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  user: 'recipe_develop',
  password: 'recipedev321',
  database: 'recipedb'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.connect();

  connection.query('SELECT * FROM company', function(err, results){
    if (err) console.error('err : ' + err);
    console.log(results);
    return res.json(results)
  });

  connection.end();
});

module.exports = router;
