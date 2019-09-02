require('dotenv').config();
const express = require('express')
const massive = require('massive')
const Ctrl = require('../server/controller')

const PORT = 4040
const {CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db => { app.set('db',db);
 console.log('roger,roger 📠') })

 app.get('/api/houses', Ctrl.getHouses)

 app.post('/api/house/:id', Ctrl.complete)


app.listen(PORT, () => console.log(`server live on ${PORT}`))