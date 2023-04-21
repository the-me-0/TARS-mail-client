import express from 'express'
import { connect } from 'mongoose'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

connect('mongodb://mongo/tars_mail_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('hello world')
})

const port = 4000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
