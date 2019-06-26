import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


class SearchTMDB extends Component {
   constructor(props) {
       super(props);

       this.state = {
           movieAddToRentalLib: null,
           searchMovie: "",
           apiKey: process.env.REACT_APP_MOVIEDB_KEY,
           baseURL: "http://localhost:3001/"
       };
   }

   onSearchChange = (event) => {
       const updatedState = {
           searchMovie: event.target.value
       }
       this.setState(updatedState)
   }


   onSearchButtonHandler = () => {
    
    if (this.state.searchMovie) {
        axios.get('http://localhost:3001/movies?query=' + this.state.searchMovie)
        .then((response) => {
           console.log(response);
       })
        }
       
   }
   

   render() {
       
    return (
        <main>
            <h2>Movie Search Page</h2>
            <p>To find a movie by title, type the movie title in the search bar</p>
            <lable>
                Movie Title:
                <input 
                type="text"
                onChange={this.onSearchChange}>
                </input>
            </lable>
            <input type="submit" name="submit" value="Search" onClick={this.onSearchButtonHandler} />
        </main>
        )
    }
}

export default SearchTMDB;