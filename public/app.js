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
          console.log(response)
          this.setState({
            beers: response.data
          })
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    render() {
      let bookItems = this.state.books.map( (book) => {
        return <li>{ book.name }</li>
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
