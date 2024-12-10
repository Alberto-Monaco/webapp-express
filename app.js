// Importo il framework Express e creo un'istanza del server
const express = require('express')
const server = express()

// Importo i middleware per la gestione degli errori
const NotFound = require('./middleware/notFound')
const ServerErrorsHandler = require('./middleware/ServerErrorsHandler')

// Importo le routes per la gestione dei film
const MoviesRoutes = require('./routes/MoviesRoutes')

// Configuro le variabili d'ambiente per porta e host
const port = process.env.PORT
const host = process.env.HOST

// Route principale che conferma il funzionamento del server
server.get('/', (req, res) => {
	res.send(`Server is up and running!`)
})

// Collego le routes dei film all'endpoint /movies
server.use('/movies', MoviesRoutes)

// Aggiungo i middleware per la gestione degli errori
server.use(NotFound)
server.use(ServerErrorsHandler)

// Avvio il server sulla porta specificata
server.listen(port, () => {
	console.log(`Server is running on ${host}:${port}`)
})
