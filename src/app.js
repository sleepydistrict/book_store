var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');

//const element = <h1>Hello, world!</h1>;
class BooksList extends React.Component {
    constructor() {
      super();
      this.state ={
        books: [{
          name: "Book 1",
          genre: "fiction"
        }, 
        {
          name: "Book 2",
          genre: "non-fiction"
        }, 
        {
          name: "Book 3",
          genre: "fear"
        }
      ]}
    }
    render() {
      const listItems = this.state.books.map((book) => {
        return <li key={books._id}>{book.name}</li>
      });
      return (
        <ul> {listItems} </ul>
      )
    }
  };

    ReactDOM.render(
      <BooksList />,
      document.getElementById('books')
    );