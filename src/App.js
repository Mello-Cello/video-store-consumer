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
selectedObject = (movie, customer) => {
  //this.setState updates the state and re-renders
  this.setState({

    selectedMovie: movie,
    selectedCustomer: customer

  })

}


  render() {
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

          <Route path="/search"
          render={(props) =>
            <SearchTMDB
            isAuthed={true}
            />
            }
          />
          <Route path="/customers"
          render={(props) =>

            <CustomerList selectedCustomerCallback={this.selectedObject}
            isAuthed={true}
            />

          }
          />
          <Route path="/library"
          render={(props) =>

            <Library selectedMovieCallback={this.selectedObject}
            isAuthed={true}
            />

          }
          />
        </div>
      </Router>
      <div>

        <Selected showMovie={this.state.selectedMovie}/>
        <Selected showCustomer={this.state.selectedCustomer}/>
      </div>
      </section>
    );
  }
}

export default App;
