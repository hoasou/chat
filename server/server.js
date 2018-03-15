const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>')
})
app.get('/data', (req, res) => {
  res.json({name: '111 app', type: 'it'})
})

app.listen(9093, () => {
  console.log('node app start at port 9093')
})