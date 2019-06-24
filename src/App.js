import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerList from './components/CustomerList';
import MovieList from './components/MovieList';
import Selected from './components/Selected';
import SearchTMDB from './components/SearchTMDB';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {

  
  render() {
    return (
      <Router>
        {/* <Root> */}
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search Page</Link>
              </li>
              <li>
                <Link to="/customers">Customer List</Link>
              </li>
              <li>
                <Link to="/movies">Movie List</Link>
                <MovieList />
              </li>
            </ul>
          </nav>
          

          {/* <Route path="/" exact component={App} /> */}
          <Route path="/search" component={SearchTMDB} />
          <Route path="/customers" component={CustomerList} />
          <Route path="/movies" component={MovieList} />
        </div>
        {/* </Root> */}
      </Router>
    );
  }
}

export default App;
