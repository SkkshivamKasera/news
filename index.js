const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('4e1ea5bf58624c85bff245aa69a4e47b');
const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

let PORT = process.env.PORT || 3000

app.get('/', async (req, res) => {
     let red = await newsapi.v2.topHeadlines({
     category: 'business',
     language: 'en',
     country: 'in'
     })
     res.send(red)
})

app.listen(PORT, () => {
     console.log(`app listen on ${PORT}`)
})