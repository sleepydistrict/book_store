var mongoose = require('mongoose');

//Book Schema

var bookSchema = mongoose.Schema({
  title:{
    type: String
  },
  genre:{
    type: String
  },
  
});

var Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books

module.exports.getBooks = function(callback, limit) {
    Book.find(callback).limit(limit);
}