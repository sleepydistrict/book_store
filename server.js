/**
 * Import JS libraries which we installed with npm 
 */
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var babel_core = require('babel_core');


// Import Mongoose Schema file (models/')

var Genre = require('./models/genres'); 
var Book = require('./models/book');

// Initalize express web server

var app = express();

// Configure express server with body parser library

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Set port for express web server

var port = process.env.PORT;
app.set('port', port);

// connect to mongoose
// mongo ds115085.mlab.com:--port15085/book_store -usleepydistrict01 -pSheahi01
// mongodb://sleepydistrict01:sheahi01@ds115085.mlab.com:15085/book_store

var promise = mongoose.connect('mongodb://admin:1234@ds115085.mlab.com:15085/book_store', {
  useMongoClient: true, 
});

//require("babel-core").transform("code", options);


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

// Start express web server

app.listen(app.get('port'));
//console.log('Running on port 3000...');



