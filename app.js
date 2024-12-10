const express = require('express')
const server = express()

const NotFound = require('./middleware/notFound')
const ServerErrorsHandler = require('./middleware/ServerErrorsHandler')

const MoviesRoutes = require('./routes/MoviesRoutes')

const port = process.env.PORT
const host = process.env.HOST

server.get('/', (req, res) => {
	res.send(`Server is up and running!`)
})

server.use('/movies', MoviesRoutes)

server.use(NotFound)
server.use(ServerErrorsHandler)

server.listen(port, () => {
	console.log(`Server is running on ${host}:${port}`)
})
