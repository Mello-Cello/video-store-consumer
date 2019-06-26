import React from 'react';
import PropTypes from 'prop-types';
import CustomerList from './CustomerList';
import Library from './Library';
import './Selected.css';

function Selected(props) {
   const displaySelection = props.showSelection;
    if (props.showSelection) {
    return (
      <section>
        <div className='SelectedObjectsWrapper'>
            <h3>Customer</h3>
            <h3>Current Movie: {displaySelection}</h3> 
            </div> 
      </section>   
    )
} else {
    return null
}
}

export default Selected;