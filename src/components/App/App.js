import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

const business = {
  imageSrc: './img/jacket.jpg',
  name: 'WATER REPELLENT COLORBLOCK JACKET',
  color: 'Brown',
  size: '7',
  category: 'Jacket',
  rating: 4.6,
  reviewCount: 90
}

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    }
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.searchYelp(term, location, sortBy).then((businesses) => {
      this.setState({businesses: businesses});
    });
  }


  render() {
    return (
      <div className='App'>
        <h1>gs_clothing</h1>
        <SearchBar />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;
