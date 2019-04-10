const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const userApi = require('./api/user.js')

app.use( bodyParser.json() )
app.use('/api/user', userApi)
app.listen(port, () => console.log(`Listening on port ${port}!`))
