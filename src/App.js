import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerList from './components/CustomerList';
import Library from './components/Library';
import Selected from './components/Selected';
import SearchTMDB from './components/SearchTMDB';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {

  
  render() {
    return (
      <Router>

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
                <Link to="/library">Library</Link>
    
              </li>
            </ul>
          </nav>
          


          <Route path="/search" component={SearchTMDB} />
          <Route path="/customers" component={CustomerList} />
          <Route path="/library" component={Library} />
        </div>
      </Router>
    );
  }
}

export default App;
