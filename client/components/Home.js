import React from 'react';
import RentalCar from './RentalCar';

const Home = React.createClass({
  render() {
    return (
    <div>
      <div className={this.props.rentals.isFetching ? "loading" : "notLoading"}>
        <div className="loading-pulse"></div>
      </div>
      <div className={this.props.rentals.error ? "error" : "notLoading"}>
        <h1>Uh-oh, Something's not right!</h1>
        <p><strong>Error:</strong> {this.props.rentals.errorMessage}</p>
      </div>
      <div id="results" className={this.props.rentals.isFetching ? "notLoading" : ""}>
        {this.props.rentals.currentData.map((el,i)=>{
          return <RentalCar id={i} key={i} {...el} {...this.props.rentals} />
        })}
      </div>
    </div>)
  }
})

export default Home;
