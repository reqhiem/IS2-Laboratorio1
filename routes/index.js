var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Laboratorio 1' });
});

/*GET saludos page*/
router.get('/greeting', function(req,res){
  res.send('Hola :D')
})

module.exports = router;
