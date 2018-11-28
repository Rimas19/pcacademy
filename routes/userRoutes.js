const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/new', userController.create);
router.get('/getAll', userController.get);
router.get('/:id', userController.read);
router.delete('/delete/', userController.delete);
router.put('/update/', userController.update);

module.exports = router;