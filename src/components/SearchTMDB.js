import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';


class SearchTMDB extends Component {
   constructor(props) {
       super(props);

       this.state = {
           movieAddToRentalLib: null,
           searchMovie: "",
           searchResults: [],
           apiError: null,
           apiSuccess: null,
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

   onAddtoRentalButtonHandler = (movie) => {
       // console.log(movie)
    const movieDataToSendToApi ={
            "movie": {
              "title": movie.title,
              "overview": movie.overview,
              "release_date": movie.release_date,
              "image_url": movie.image_url,
              "external_id": movie.external_id,
              "inventory": 1
            }
    }

    axios.post('http://localhost:3001/movies',movieDataToSendToApi)
    .then((response) => {
      console.log(response)
      if (response.data.movie) {
        const successMessage = `Succesfully added ${response.data.movie.title}`
        this.setState({
            apiSuccess: successMessage
        })
      } else {
        const successMessage = response.data.errors
        this.setState({
            apiSuccess: successMessage
        })
      }

   })
   .catch((error) => {
     // console.log("in catch *******");

       this.setState({

           apiError: error.message
       })
   });
   }

   render() {
        const eachMovie = this.state.searchResults.map((movie, i) => {
            return (
                <div key={i}>
                    <article key={i}>
                        <p >{movie.title}</p>
                        <button
                        onClick={() => {this.onAddtoRentalButtonHandler(movie)}}>
                            Add To Rental Library
                        </button>
                    </article>
                </div>
            )
        })
        const successSection = (this.state.apiSuccess) ? (<section> Yay! {this.state.apiSuccess}</section>) : null;
       const errorSection = (this.state.apiError) ? (<section> Error: {this.state.apiError}</section>) : null;
    return (
        <main>
            <h2>Movie Search Page</h2>
            <p>To find a movie by title, type the movie title in the search bar</p>
            <label>
                Movie Title:
                <input
                type="text"
                onChange={this.onSearchChange}>
                </input>
            </label>
            <input type="submit" name="submit" value="Search" onClick={this.onSearchButtonHandler} />
            {errorSection}
            {successSection}
            {eachMovie}
        </main>
        )
    }
}

export default SearchTMDB;
