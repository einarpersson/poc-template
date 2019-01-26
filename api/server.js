require('dotenv').config()
const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/', (req, res, next) => {
  res.send('hello from api')
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
