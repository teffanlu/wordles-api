const { Router } = require('express');
const router = Router();

const { 
  getGamer,
  createGamer,
  deleteGamer,
  updateGamer,
  updateStatisticsGamer,
  confirmCodigo,
  createCodigo,
  getGamers
} = require('../controllers/users.controllers');

router.get('/gamers', getGamers);
router.post('/gamer', getGamer);
router.post('/newGamer', createGamer);
router.post('/createCodigo', createCodigo);
router.post('/codigo', confirmCodigo);
router.delete('/gamer/:id', deleteGamer);
router.put('/gamer/:id', updateGamer);
router.put('/statisticGamer/:id', updateStatisticsGamer);

module.exports = router;