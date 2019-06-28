import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
// import { createDecipher } from 'crypto';

class Library extends Component {
    //change Library to functional component
    //pass in props
    //make a variable movies = props to pull movies array from App
    //set another variable 'allmovies' and loop through map and return
    constructor() {
        super();

        this.state = {
            movies: [],
            errorMessage: null,
        }
    }

    componentDidMount() {
        const moviesURL = 'http://localhost:3001/movies';
        axios.get(moviesURL)
            .then((response) => {
                const movies = response.data.map((movieInfo) => {
                    return {
                      id: movieInfo.id,
                      title: movieInfo.title,
                      overview: movieInfo.overview,
                      release_date: movieInfo.release_date,
                      image_url: movieInfo.image_url,
                      extrenal_id: movieInfo.extrenal_id,
                    }
                })
                this.setState({
                    movies: movies,
                });
            })
            .catch((error) => {
               console.log(error.message)
            });
    }

    handleMovieSelection = movie => {
        // const pickedMovie = this.state.movies.id
        this.props.selectedMovieCallback(
            movie.title
        );
    }

    // make a callback function for selectedHandler
    // selectedHandlerCallback=selectedHandler

    render() {
       const eachMovie = this.state.movies.map((movie, i) => {
           return (
           <div className="movie_card" key={i}>
            <ul>
            <img src={movie.image_url} alt="movie image" className="movie_IMG" />
            
                <li id="title" className="movie_info">{movie.title} </li> 
                <li>Released: {movie.release_date}</li>           
                <button className="most_btns" onClick={()=>this.handleMovieSelection(movie)}> Select Movie </button>
            </ul>
           </div>
            )

       })

        const errors = this.state.error;

        return (
            <section>
                <h1>All Movies</h1>
            <div className="movie_container"> 
                {eachMovie}
            </div>
            </section>
        )
    }

}
export default Library;
