import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { createDecipher } from 'crypto';

class CustomerList extends Component {
    //pass in props?
    //make a variable movies = props to pull movies array from App
    //set another variable 'allmovies' and loop through map and return
    constructor() {
        super();

        this.state = {
            customers: [],
            errorMessage: null,
        }
    }

    componentDidMount() {
        const customersURL = 'http://localhost:3001/customers';
        axios.get(customersURL)
            .then((response) => {
                console.log(response.data);
                const customers = response.data.map((CustInfo) => {
                    return {
                      "name": "Shelley Rocha",
                      "registered_at": "Wed, 29 Apr 2015 07:54:14 -0700",
                      "address": "Ap #292-5216 Ipsum Rd.",
                      "city": "Hillsboro",
                      "state": "OR",
                      "postal_code": "24309",
                      "phone": "(322) 510-8695",
                      "account_credit": 13.15
                      extrenal_id: movieInfo.extrenal_id,
                    }

                })
                this.setState({
                    customers: customers, // only need "customers," since they match?
                });
            })
            .catch((error) => {
               console.log(error.message)
            });
    };

    render() {
       // const eachMovie = this.state.movies.map((movie, i) => {
       //     return (
       //     <div>
       //      <p>{movie.title} <button>Select: {movie.title}</button> </p>
       //     </div>
       //      )
       // })
       //  const errors = this.state.error;
       //
       //  return (
       //      <section>
       //          {eachMovie}
       //      </section>
       //  )
    }



}

export default CustomerList;
