const express = require('express')
const path = require('path')
const { Note } = require('./index')
const app = express();

// static middleware
app.use('/dist', express.static(path.join(__dirname, '../dist')))
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}); 


app.get('/listNotes', async(req, res, next) => {
  try {
    res.send(await Note.findAll());
  }
  catch(error) {
    next(error);
  }
})

app.post('/createNote', async(req, res,  next) => {
  try {
    const newNote= await Note.create(req.body);
    res.send(newNote);
  }
  catch(error) {
    next(error)
  }
})

// app.post('/api/createNote', async(req, res,  next) => {
//   try {
//     const newNote= await Note.create(req.body);
//     res.send(newNote);
//   }
//   catch(error) {
//     next(error)
//   }
// })



module.exports = app;