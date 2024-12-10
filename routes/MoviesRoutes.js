const express = require('express')
const router = express.Router()
const MoviesController = require('../controllers/MoviesController')

router.get('/', MoviesController.index)
router.get('/:id', MoviesController.show)

module.exports = router
