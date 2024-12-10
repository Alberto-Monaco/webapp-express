// Definisco il middleware per la gestione degli errori del server
const ServerErrorsHandler = (err, req, res, next) => {
	// Invio una risposta con status 500 e un messaggio di errore generico
	res.status(500).send('Something broke!')
}

// Esporto il middleware per renderlo disponibile ad altri moduli
module.exports = ServerErrorsHandler
