var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OCORRENCIA NO CARTÃO DE PONTO ELETRÔNICO', title_1 : 'OCORRENCIA NO CARTÃO', title_2: 'DE PONTO ELETRÔNICO'});
});

module.exports = router;
