// Importo il framework Express e creo un'istanza del router
const express = require('express')
const router = express.Router()
// Importo il controller per la gestione dei film
const MoviesController = require('../controllers/MoviesController')

// Route per ottenere la lista di tutti i film
router.get('/', MoviesController.index)
// Route per ottenere i dettagli di un singolo film tramite il suo ID
router.get('/:id', MoviesController.show)

// Esporto il router per renderlo disponibile ad altri moduli
module.exports = router
