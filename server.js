require('dotenv-defaults').config()
const express = require('express')
const cors = require('cors')
const api = require('./api/index')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', api)
app.use('/', express.static('dist'))

app.listen(process.env.API_PORT, () => {
  console.log(`Listening on port: ${process.env.API_PORT}`)
})
