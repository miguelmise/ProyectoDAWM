var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/modelo', function(req, res, next) {
  models.modelo.findAll({
    include:[{
      model: models.marca,
      as: 'idMarca_marca'
    }],
  })
  .then(modelos=>{
    res.json(modelos)
  })
  .catch(error=>res.status(400).send(error))
});

router.get('/marca', function(req, res, next) {
  models.marca.findAll({
    include:[{
      model: models.modelo,
      as: 'modelos'
    }],
  })
  .then(marcas=>{
    res.json(marcas)
  })
  .catch(error=>res.status(400).send(error))
});

module.exports = router;
