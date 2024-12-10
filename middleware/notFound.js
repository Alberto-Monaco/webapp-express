// Definisco il middleware per gestire le richieste a rotte non esistenti
const NotFound = (req, res, next) => {
	// Invio una risposta con status 404 e un messaggio di errore
	res.status(404).json({ err: 'not found' })
}

// Esporto il middleware per renderlo disponibile ad altri moduli
module.exports = NotFound
