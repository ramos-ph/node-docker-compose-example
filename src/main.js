const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)

app.use((req, res, next) => {
  const error = new Error('Route not found')
  error.status = 404
  return next(error)
})

app.use((error, req, res, next) => {
  return res.status(error.status || 500).send({ error: error.message })
})

app.listen(8080)
