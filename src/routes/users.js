const { Router } = require('express');
const router = Router();

const { 
  getGamer,
  createGamer,
  deleteGamer,
  updateGamer,
  updateStatisticsGamer
} = require('../controllers/users.controllers');

router.post('/gamer', getGamer);
router.post('/newGamer', createGamer);
router.delete('/gamer/:id', deleteGamer);
router.put('/gamer/:id', updateGamer);
router.put('/statisticGamer/:id', updateStatisticsGamer);

module.exports = router;