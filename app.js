const express = require('express')
const server = express()
const connection = require('./database/connection')
const port = process.env.PORT
const host = process.env.HOST
server.use(express.json())

server.listen(port, () => {
	console.log(`Server is running on ${host}:${port}`)
})
