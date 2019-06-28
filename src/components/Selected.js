import React from 'react';
// import PropTypes from 'prop-types';
// import CustomerList from './CustomerList';
// import Library from './Library';
import './Selected.css';

function Selected(props) {
   const displaySelection = props.showMovie;
   const displayCustomer = props.showCustomer;
console.log('props in return in selected are ', props)


// ********* FIX THIS *******************************************
const handleSubmitRental = (customer, movie) => {
   const rentalDataToSendToApi ={
      "title": movie,
      "customer_id": 1,
      "due_date": "2019-07-16" // CHANGE THIS TO TODAY + 3 DAYS
    }

   this.axios.post('http://localhost:3001/rentals/' + displaySelection.title + '/check-out', rentalDataToSendToApi)
   .then((response) => {
     console.log(response)
     if (response.data.movie) {
       // ***** CHECK ALL OF THIS AGAINST THE ACTUAL API RESPONSE!!! ****
       const successMessage =
       `Succesfully checked out movie ${response.data.movie_id} to cutomer ${response.data.customer_id}`
       this.setState({
           apiSuccess: successMessage
       })
     } else {
       const successMessage = response.data.errors
       this.setState({
           apiSuccess: successMessage
       })
     }


     const resetSelected = () => {
       // WRITE A CALLBACK FUNCTION TO SET STATE IN APP
       // PASS IN THROUGH PROPS
       // displaySelection: '',
       // displayCustomer: ''
     }

  })
  .catch((error) => {
    // console.log("in catch *******");

      this.setState({

          apiError: error.message
      })
  });
}

// TypeError: Cannot read property 'handleSubmitRental' of undefined
// *****************************************************************

    // if (props.showSelection) {
    return (

      <section>
        <div className='SelectedObjectsWrapper'>
            <h3>Customer: {displayCustomer}</h3>
            <h3>Current Movie: {displaySelection}</h3>
            <button onClick={()=>this.handleSubmitRental(this.props.showCustomer, this.props.showMovie)}>
              check out
            </button>
            </div>
      </section>
    )
// } else {
//     return null
// }
}

export default Selected;
