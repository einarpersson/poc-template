require('dotenv-defaults').config()
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res, next) => {
  res.send('hello from api')
})

app.post('/', ({ body }, res, next) => {
  console.log(body)
  res.send('ok')
})

app.listen(process.env.API_PORT, () => {
  console.log(`Listening on port: ${process.env.API_PORT}`)
})
