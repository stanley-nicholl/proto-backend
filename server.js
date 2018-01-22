const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
app.disable('x-powered-by')

const {
  // authRouter,
  usersRouter,
  prototypesRouter
} = require('./routes')

// app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/prototypes', prototypesRouter)

app.use((req, res) => {
  const status = 404
  const message = `Could not ${req.method} ${req.path}`
  res.status(status).json({ status, message })
})

app.use((err, _req, res, _next) => {
  const status = err.status || 500
  const message = err.message || 'Something went wrong!'
  res.status(status).json({ status, message })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
