require('dotenv').config()
const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/books', require('./controllers/books'))

app.get('/', (req, res) => {
    res.send('This is my app')
})

app.get('/*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)