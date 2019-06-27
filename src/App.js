import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerList from './components/CustomerList';
import Library from './components/Library';
import Selected from './components/Selected';
import SearchTMDB from './components/SearchTMDB';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {

  constructor() {
    super();

    this.state = {
        selectedMovie: '',
        selectedCustomer: '', 
        message: '',
    }
}
//selectId function that sets state for the movie ID
selectedMovieObject = (movie) => {
  //this.setState updates the state and re-renders
  this.setState({
    selectedMovie: movie,
  })

}
selectedCustomerObject = (customer) => {
  //this.setState updates the state and re-renders
  this.setState({   
    selectedCustomer: customer, 
  })

}
  render() {
    console.log(this.state)
    return (
      <section>
       
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
        
          <Route path="/search"/>
          <Route path="/customers"
          render={(props) => 
            <CustomerList selectedCustomerCallback={this.selectedCustomerObject} 
            isAuthed={true}
            />
          }
          />
          <Route path="/library" 
          render={(props) => 
            <Library selectedMovieCallback={this.selectedMovieObject} 
            isAuthed={true}
            />
          }
          />
        </div>
      </Router>
      <div> 
        <Selected showMovie={this.state.selectedMovie} 
        showCustomer={this.state.selectedCustomer}
         />
      </div>
      </section>
    );
  }
}

export default App;
