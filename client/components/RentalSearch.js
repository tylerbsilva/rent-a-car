import React from 'react';
import {Link} from 'react-router';
import moment from 'moment';
import helpers from '../utils/searchHelpers';

const RentalSearch = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchRentals({
      dest: this.refs.destination.value,
      startdate: moment(this.refs.startdate.value).format('MM/DD/YYYY'),
      enddate: moment(this.refs.enddate.value).format('MM/DD/YYYY'),
      pickuptime: this.refs.pickuptime.value,
      dropofftime: this.refs.dropofftime.value
    });
  },
  render() {
    return (
      <form ref="rentalSearchForm" onSubmit={this.handleSubmit}>
        <label>
          Location:
          <input type="text" required="true" ref="destination" />
        </label>
        <label className="mobileHalf">
          Pickup Date:
          <input type="date" required="true" ref="startdate" />
        </label>
        <label className="mobileHalf">
          Pickup Time:
          <input type="time" required="true" ref="pickuptime" />
        </label>
        <label className="mobileHalf">
          Dropoff Date:
          <input type="date" required="true" ref="enddate" />
        </label>
        <label className="mobileHalf">
          Dropoff Time:
          <input type="time" required="true" ref="dropofftime" />
        </label>


        <button type="submit">SEARCH</button>
      </form>
    )
  }
});

export default RentalSearch;
