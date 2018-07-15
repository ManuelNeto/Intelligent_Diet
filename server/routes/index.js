const express = require('express');
const router = express.Router();
const AlimentoController = require('../controllers/alimento.controller');

//Alimento routes
router.get('/getAlimentos', AlimentoController.get);
router.get('/getAlimentos/:type', AlimentoController.getByType);
router.post('/createAlimento', AlimentoController.save);
router.put('/updateAlimento', AlimentoController.editAlimento);
router.delete('/deleteAlimento', AlimentoController.deleteAlimento);

module.exports = router;
