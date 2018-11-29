const express = require('express');
const invoiceController = require('../controllers/invoiceController');

const router = express.Router();

router.post('/new', invoiceController.create);
router.get('/getAll', invoiceController.get);
router.get('/:id', invoiceController.read);
router.delete('/delete/', invoiceController.delete);
router.put('/update/', invoiceController.update);



module.exports = router;