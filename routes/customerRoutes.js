const express = require('express');
const customerController = require('../controllers/customerController');

const router = express.Router();

router.post('/new', customerController.create);
router.get('/getAll', customerController.get);
router.get('/:id', customerController.read);
router.delete('/delete/', customerController.delete);
router.put('/update/', customerController.update);



module.exports = router;