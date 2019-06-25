import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Library extends Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            errorMessage: null,
        }
    }

    displayMovies() {
        const moviesURL = 'http://localhost:3001/movies'; 
        axios.get(moviesURL)
            .then((response) => {
                console.log(response.data);
                const movies = response.data.map((movieInfo) => {
                    const movie = {
                      id: movieInfo.id,
                      title: movieInfo.title,
                      overview: movieInfo.overview,
                      release_date: movieInfo.release_date,
                      image_url: movieInfo.image_url,
                      extrenal_id: movieInfo.extrenal_id,  
                    }
                    return movie
                })
            })
            .catch((error) => {
               console.log(error.message)
            });
    };

    // showMovieButtonClick = () => {
    //     this.props.displayMoviesCallback;
    // }

// on button click I want it to show all movies. 
    render() {
       
        const errors = this.state.error;
      
        return (
            <section>
                <button onClick={this.displayMovies}>Show Movies</button>

            </section>
        )
    }
    

      
}
export default Library;