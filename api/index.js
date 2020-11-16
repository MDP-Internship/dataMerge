import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import irregular from './routes/irregular'
import remove from './routes/remove'
import People from './model/people'

const app = express()

app.use(bodyParser.json())

// home
app.get('/', (req, res) => {
  People.find({}).then(function (people) {
    /* find arama yapacağı alan {} hepsini */
    res.send(people)
  })
})

// route
app.use('/irregular', irregular)
app.use('/remove', remove)
app.use((req, res, next) => {
  res.status(404).json('Not Found')
})
const uri =
  // eslint-disable-next-line max-len
  'mongodb+srv://datamerge:2020denizli@cluster0.xl2tb.mongodb.net/<dbname>?retryWrites=true&w=majority'

const options = {
  server: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS: 30000,
    },
  },
  replset: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS: 30000,
    },
  },
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose.connect(uri, options)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

// listen
const porta = process.env.PORT || 8080
app.listen(porta, () => console.log('Example app listening on port 8080!'))
