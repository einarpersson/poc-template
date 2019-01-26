require('dotenv-defaults').config()
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res, next) => {
  res.send('hello from api')
})

app.listen(process.env.API_PORT, () => {
  console.log(`Listening on port: ${process.env.API_PORT}`)
})
