const express = require('express')
const helmet = require('helmet')
const recipesRouter = require('./routers/recipes')

const server = express()
const port = process.env.PORT || 3030

server.use(helmet())
server.use(express.json())

server.use(recipesRouter)

server.get('/welcome', (req, res) => {
  res.send("Welcome to recipes API!")
})



server.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`)
})