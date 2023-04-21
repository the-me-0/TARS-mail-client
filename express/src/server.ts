import express from 'express'
import type { Express, Request, Response } from 'express'
import { connect } from 'mongoose'
import bodyParser from 'body-parser'

const app: Express = express()
const port = 4000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

connect('mongodb://mongo/tars_mail_db')
  .then(() => { console.log('MongoDB Connected') })
  .catch(err => { console.log(err) })

app.get('/', (req: Request, res: Response) => {
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
