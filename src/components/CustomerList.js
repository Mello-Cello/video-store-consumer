
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
// import { createDecipher } from 'crypto'; // do we need this?

class CustomerList extends Component {
    //pass in props?
    //make a variable movies = props to pull movies array from App
    //set another variable 'allmovies' and loop through map and return
    constructor(props) {
        super(props);

        this.state = {
            customers: [],
            errorMessage: null,
        }
    }

    componentDidMount() {
        const customersURL = 'http://localhost:3001/customers';
        axios.get(customersURL)
            .then((response) => {
                // console.log(response.data);
                const customers = response.data.map((custInfo) => {
                  // const { name, registered_at, address, city, state, postal_code, phone, account_credit } = custInfo;
                    return {
                      id: custInfo.id,
                      name: custInfo.name,// string
                      registered_at: custInfo.registered_at, // Date
                      address: custInfo.address, // string
                      city: custInfo.city, //string
                      state: custInfo.state, // string
                      postal_code: custInfo.postal_code, // string
                      phone: custInfo.phone, // string
                      account_credit: custInfo.account_credit, // number
                      // external_id: custInfo.external_id, // customers don't have an external id as a field;
                    }
                })
                this.setState({
                    customers: customers, // only need "customers," since they match?
                });
            })
            .catch((error) => {
               console.log(error.message)
            });
    }
        handleCustomerSelection = customer => {
            // const pickedMovie = this.state.movies.id
            console.log('in handle customer selection:', customer);
            this.props.selectedCustomerCallback(
                customer.name,
                customer.id
            );
            console.log(customer)
        }
    render() {
       const renderedCustomers = this.state.customers.map((customer, i) => {
           return (
        
           <div className="customer_card"key={i}>
               <ul>
               <li id="title" className="movie_info"> {customer.name} </li>
            <li>{customer.address}</li>
            <button className="most_btns" onClick={()=>this.handleCustomerSelection(customer)}>Select</button> 
            </ul>
           </div>
           
            )
       })

        return (
            <section>
                <h1>Customers </h1>
            <div className="customer_container">
                {renderedCustomers}
            </div>
            </section>
        )
    }

}

export default CustomerList;
