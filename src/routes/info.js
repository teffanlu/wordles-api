const { Router } = require('express');
const router = Router();

const { 
    getDataEmpresa,
    getDocument,
    setDocument,
    setDataEmpresa,
    deleteDocument,
    getMensaje,
    setMensaje,
    setArchivo,
    deleteArchivo,
    getArchivo,
    setArchivo2
} = require('../controllers/info.controllers');

router.get('/:id', getDataEmpresa);
router.get('/mensaje/:id', getMensaje);
router.get('/archivo/:id', getArchivo);
router.get('/documentacion/:id', getDocument);
router.post('/:id', setDataEmpresa);
router.post('/documentacion/:id', setDocument);
router.post('/mensaje/:id', setMensaje);
router.post('/archivo/:id', setArchivo);
router.post('/archivo2/:id', setArchivo2);
router.delete('/documentacion/:id', deleteDocument);
router.delete('/archivo/:id', deleteArchivo);

module.exports = router;