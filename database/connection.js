// Importo il modulo mysql2 per la connessione al database
const mysql = require('mysql2')

// Creo una connessione al database utilizzando le variabili d'ambiente
const connection = mysql.createConnection({
	host: process.env.DB_HOST, // Host del database
	port: process.env.DB_PORT, // Porta del database
	user: process.env.DB_USER, // Nome utente
	password: process.env.DB_PASS, // Password
	database: process.env.DB_NAME // Nome del database
})

// Tento la connessione al database
connection.connect((err) => {
	if (err) {
		// In caso di errore, mostro un messaggio con i dettagli
		console.log('Error connecting to Db', err)
	} else {
		// Se la connessione ha successo, mostro un messaggio di conferma
		console.log(`DB is connected`)
	}
})

// Esporto la connessione per renderla disponibile ad altri moduli
module.exports = connection
