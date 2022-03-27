const express = require('express')
const path = require('path')
const { Note } = require('./index')
const app = express();

app.use('/dist', express.static(path.join(__dirname, '../dist')))
app.use(express.json());

const DIST_PATH = path.join(__dirname, '../dist');
const PUBLIC_PATH = path.join(__dirname, '../public');

app.use(express.static(DIST_PATH)); 
app.use(express.static(PUBLIC_PATH));
app.use(express.json());

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

module.exports = app;