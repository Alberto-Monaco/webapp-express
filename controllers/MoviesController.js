// Importo la connessione al database
const connection = require('../database/connection')

// Funzione per ottenere la lista di tutti i film
function index(req, res) {
	// Query SQL per selezionare tutti i film
	const sql = `SELECT * FROM movies`
	// Eseguo la query
	connection.query(sql, (err, results) => {
		// In caso di errore, ritorno un errore 500
		if (err) return res.status(500).json({ err: err })

		// Ritorno i risultati e il conteggio
		res.json({
			movies: results,
			count: results.length
		})
	})
}

// Funzione per ottenere i dettagli di un singolo film
function show(req, res) {
	// Recupero l'ID del film dai parametri della richiesta
	const id = req.params.id
	// Query SQL per selezionare il film specifico
	const sql = `SELECT * FROM movies WHERE id = ?`

	// Query SQL per selezionare le recensioni del film
	const reviewsSql = `SELECT * FROM reviews WHERE movie_id=?`

	// Eseguo la query per ottenere il film
	connection.query(sql, [id], (err, results) => {
		// In caso di errore, ritorno un errore 500
		if (err) return res.status(500).json({ err: err })
		// Se non trovo il film, ritorno un errore 404
		if (results.length == 0) return res.status(404).json({ err: 'movie not found' })

		// Eseguo la query per ottenere le recensioni
		connection.query(reviewsSql, [id], (err, reviewsResults) => {
			// In caso di errore, ritorno un errore 500
			if (err) return res.status(500).json({ err: err })

			// Creo un oggetto film che include anche le recensioni
			const movie = {
				...results[0],
				reviews: reviewsResults
			}

			// Ritorno l'oggetto film completo
			res.json(movie)
		})
	})
}

// Esporto le funzioni per renderle disponibili
module.exports = { index, show }
