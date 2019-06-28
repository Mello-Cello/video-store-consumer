import React from 'react';
// import PropTypes from 'prop-types';
// import CustomerList from './CustomerList';
// import Library from './Library';
import './Selected.css';
import axios from 'axios';

function Selected(props) {
   const displaySelection = props.showMovie;
   const displayCustomer = props.showCustomer;
   const displayCustomerId = props.showCustomerId;
console.log('props in return in selected are ', props)


// ********* FIX THIS *******************************************
const handleSubmitRental = (customer, movie) => {
  const todayDate = new Date();
   const rentalDataToSendToApi ={
      "title": movie,
      "customer_id": customer,
      "due_date": "2019-07-16" // CHANGE THIS TO TODAY + 3 DAYS
    }

   axios.post('http://localhost:3001/rentals/' + displaySelection + '/check-out', rentalDataToSendToApi)
  //  .then((response) => {
  //    console.log(response)
  //    if (response.data.movie) {
  //      // ***** CHECK ALL OF THIS AGAINST THE ACTUAL API RESPONSE!!! ****
  //      const successMessage =
  //      `Succesfully checked out movie ${response.data.movie_id} to cutomer ${response.data.customer_id}`
  //      this.setState({
  //          apiSuccess: successMessage
  //      })
  //    } else {
  //      const successMessage = response.data.errors
  //      this.setState({
  //          apiSuccess: successMessage
  //      })
  //    }
  //
  //
  //    const resetSelected = () => {
  //      // WRITE A CALLBACK FUNCTION TO SET STATE IN APP
  //      // PASS IN THROUGH PROPS
  //      // displaySelection: '',
  //      // displayCustomer: ''
  //    }
  //
  // })
  // .catch((error) => {
  //   // console.log("in catch *******");
  //
  //     this.setState({
  //
  //         apiError: error.message
  //     })
  // });
}

// TypeError: Cannot read property 'handleSubmitRental' of undefined
// *****************************************************************

    // if (props.showSelection) {
    if (displaySelection != '' || displayCustomer != ''){
    return (

      <section>
        <div className="selected_objects_container" id="selected_objects_card">
            <h3>Customer: {displayCustomer}</h3>
            <h3>Current Movie: {displaySelection}</h3>
            <button className="most_btns" onClick={()=>handleSubmitRental(displayCustomerId, displaySelection)}>
              check out
            </button>
            </div>
      </section>
    );
} else {
    return null
}
}

export default Selected;
