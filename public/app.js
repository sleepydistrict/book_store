class BookList extends React.Component {
  
    constructor() {
      super();
      this.state = {
        books: []
      };
    }
  
    componentWillMount() {
      axios.get('/api/books')
        .then((response) => {
          console.log(response.data)
          this.setState({
            books: response.data
          })
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    render() {
      let bookItems = this.state.books.map( (book) => {
        return <li key={book._id}>{ book.title }</li>
      });
      
      return (
        <ul>
          { bookItems }
        </ul>
      );
    }
  }
  
  ReactDOM.render(
    <BookList />,
    document.getElementById('books')
  );
