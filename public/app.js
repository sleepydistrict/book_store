import React from 'react';
import ReactDOM from 'react-dom';

class BeerList extends React.Component {
  
    constructor() {
      super();
      this.state = {
        beers: []
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
      let beerItems = this.state.beers.map( (beer) => {
        return <li>{ beer.name }</li>
      });
      
      return (
        <ul>
          { beerItems }
        </ul>
      );
    }
  }
  
  ReactDOM.render(
    <BeerList />,
    document.getElementById('books')
  );
