const express = require('express');
const projectController = require('../controllers/projectController');

const router = express.Router();

router.post('/new', projectController.create);
router.get('/getAll', projectController.get);
router.get('/:id', projectController.read);
router.delete('/delete/', projectController.delete);
router.put('/update/', projectController.update);



module.exports = router;