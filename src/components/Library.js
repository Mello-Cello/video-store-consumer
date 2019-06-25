import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { createDecipher } from 'crypto';

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
                console.log(response.data);
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
    };
 
    render() {
       const eachMovie = this.state.movies.map((movie, i) => {
           return (
           <div>
            <p>{movie.title} <button>Select: {movie.title}</button> </p>
           </div>     
            )
       })
        const errors = this.state.error;
      
        return (
            <section> 
                {eachMovie}
            </section>
        )
    }
    

      
}
export default Library;