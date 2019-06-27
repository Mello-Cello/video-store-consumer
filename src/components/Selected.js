import React from 'react';
import PropTypes from 'prop-types';
import CustomerList from './CustomerList';
import Library from './Library';
import './Selected.css';

function Selected(props) {
   const displayMovie = props.showMovie;
   const displayCustomer = props.showCustomer;
    // if (props.showSelection) {
    return (
      <section>
        <div className='SelectedObjectsWrapper'>
            <h3>Customer: {displayCustomer}</h3>
            <h3>Current Movie: {displayMovie}</h3>
            </div>
      </section>
    )
// } else {
//     return null
// }
}

export default Selected;
