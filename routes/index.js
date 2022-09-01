var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json',(req, res, next) => {
  res.json({
    message: 'hai nama saya arif'
  });
});

module.exports = router;
