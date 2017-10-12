var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();


var Genre = require('./models/genres'); 
var Book = require('./models/book');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', 3000);

// connect to mongoose

mongoose.connect('mongodb://localhost/books');
var db = mongoose.connection;

app.get('/', (req, res) => {
  res.send('Please use api/book or api/genres');
});

app.get('/api/genres', (req, res) => {
    Genre.find((err, genres) => {
      if(err){
        throw err;
      }
      res.json(genres);
    });
});

app.post('/api/genres', (req, res) => {
  var newGenre = req.body;
  Genre.create((err, genre) => {
    if(err){
      throw err;
    }
    res.json(genre);
  });
});

app.get('/api/books', (req, res) => {
  Book.find((err, books) => {
    if(err){
      throw err;
    }
    res.json(books);
  });
});

app.post('/api/books', (req, res) => {
  var newBook = req.body;
  Book.create(newBook, (err, book) => {
      if(err){
          throw err;
      }
      res.json(book);
  });
});

app.delete('/api/books/:_id', (req, res) => {
  var query = {_id: req.params._id};  
    Book.remove(query, (err, book) => {
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.put('/api/books/:_id', (req, res) => {
  var query = {_id: req.params._id};
  var updatedBook = req.body;
  Book.findOneAndUpdate(query, updatedBook, {}, (err, book) => {
      if(err){
          throw err;
      }
      res.json(book);
  });
});

app.get('/api/books/:_id', (req, res) => {
  Book.findById(req.params._id, (err, book) => {
      if(err){
          throw err;
      }
      res.json(book);
  });
});

app.listen(3000);
console.log('Running on port 3000...');

//mongo ds012345.mlab.com:56789/dbname -u dbuser -p dbpassword
