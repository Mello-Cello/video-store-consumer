import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


class SearchTMDB extends Component {
   constructor(props) {
       super(props);

       this.state = {
           movieAddToRentalLib: null,
           searchMovie: "",
           searchResults: [],
           apiError: null
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
            const updatedMovieList = response.data
           
            this.setState({
                searchResults: updatedMovieList
            });
       })
       .catch((error) => {
           this.setState({
               apiError: error.message
           })
       });
           
        }
       
   }

   render() {
        const eachMovie = this.state.searchResults.map((movie, i) => {
            return (
                <div>
                    <p key={i}>{movie.title} <button>Add To Rental Library</button> </p>
                </div>     
            )      
        })

       const errorSection = (this.state.apiError) ? (<section> Error: {this.state.apiError}</section>) : null;
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
            {errorSection}
            {eachMovie}
        </main>
        )
    }
}

export default SearchTMDB;