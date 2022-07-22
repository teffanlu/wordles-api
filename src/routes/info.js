const { Router } = require('express');
const router = Router();

const { 
    getRooms,
    createRoom,
    getRoom,
    deleteRoom,
    updateRoom,
    getStacts,
    getStact,
    createStacts,
    getRoomsGamer
} = require('../controllers/info.controllers');

router.get('/rooms', getRooms);
router.get('/roomsGamer/:id', getRoomsGamer);
router.get('/room/:id', getRoom);
router.post('/room', createRoom);
router.delete('/room/:id', deleteRoom);
router.put('/room/:id', updateRoom);

router.post('/statistics', getStacts);
router.post('/statistic', getStact);
router.post('/createStatistic', createStacts);

module.exports = router;