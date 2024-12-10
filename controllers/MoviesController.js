const connection = require('../database/connection')

function index(req, res) {
	connection.query(`SELECT * FROM movies`, (err, results) => {
		if (err) return res.status(500).json({ err: err })

		res.json({
			movies: results,
			count: results.length
		})
	})
}

function show(req, res) {
	const id = req.params.id
	const sql = `SELECT * FROM movies WHERE id = ?`

	// get all reviews for a book
	const reviewsSql = `SELECT * FROM reviews WHERE movie_id=?`

	// get the book by the given id
	connection.query(sql, [id], (err, results) => {
		if (err) return res.status(500).json({ err: err })
		if (results.length == 0) return res.status(404).json({ err: 'movie not found' })

		//console.log(results);

		// get all reviews associated to the book
		connection.query(reviewsSql, [id], (err, reviewsResults) => {
			if (err) return res.status(500).json({ err: err })

			//console.log('reviews', reviewsResults);
			const movie = {
				...results[0],
				reviews: reviewsResults
			}

			res.json(movie)
		})
	})
}

module.exports = { index, show }
