const express = require('express')
const mongoose = require('mongoose')
// 连接mongo 并且使用chat集合
mongoose.connect('mongodb://127.0.0.1:27017/chat')
mongoose.connection.on('connected', () => {
  console.log('mongo connect success')
})
const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type: Number, require: true}
}))

// User.create({
//   user: 'zhangsan',
//   age: 29
// }, (err, doc) => {
//   if (!err) {
//     console.log(doc)
//   } else {
//     console.log(err)
//   }
// })

// User.remove({age: 29}, (err, doc) => {
//   console.log(doc)
// })

User.update({'user': 'zhangsan'}, {'$set': {age: 33}}, (err, doc) => {
  if (!err) {
    console.log(doc)
  }
})

// 新建app
const app = express()
app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>')
})
app.get('/data', (req, res) => {
  User.findOne({user: 'zhangsan'}, (err, doc) => {
    res.json(doc)
  })
  // res.json({name: '111 app', type: 'it'})
})

app.listen(9093, () => {
  console.log('node app start at port 9093')
})