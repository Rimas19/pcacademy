const express = require('express');
const supplierController = require('../controllers/supplierController');

const router = express.Router();

router.post('/new', supplierController.create);
router.get('/getAll', supplierController.get);
router.get('/:id', supplierController.read);
router.delete('/delete/', supplierController.delete);
router.put('/update/', supplierController.update);



module.exports = router;