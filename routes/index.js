var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Page d\'accueil', description: 'Accueil & Affichage de la carte' });
});

module.exports = router;
