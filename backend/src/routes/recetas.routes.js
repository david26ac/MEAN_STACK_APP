const { Router } = require('express');
const cntrlRecetas = require('../controllers/recetas.controllers');
const router = Router();

router.get('/', cntrlRecetas.save)
router.post('/', cntrlRecetas.create)

module.exports = router;