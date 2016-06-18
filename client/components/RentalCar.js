import React from 'react';
import {Link} from 'react-router';

const RentalCar = React.createClass({
  render() {
    let meta = this.props.metaData[this.props.CarTypeCode];
    return (
        <div className="rentalCar">
          <h4>{meta.CarTypeName}</h4>
          <div className="fifty">
            <p><strong>Possible models include:</strong> {meta.PossibleModels}</p>
            <hr />
            <p><strong>Possible features include:</strong> {meta.PossibleFeatures}</p>
            <hr />
            <p><strong>Typically seats:</strong> {meta.TypicalSeating}</p>
            <hr />
            <p><strong>Miles:</strong> {this.props.MileageDescription}</p>
            <hr />
            <p><strong>Pickup Airport:</strong> {this.props.PickupAirport}</p>
            <small>{this.props.LocationDescription}</small>
          </div>
          <div className="fifty">
            <table>
              <tbody>
                <tr>
                  <td>Daily Rate</td>
                  <td>{this.props.DailyRate} {this.props.CurrencyCode}</td>
                </tr>
                <tr>
                  <td>Total Days</td>
                  <td>{this.props.RentalDays} <br /> <small>{this.props.PickupDay} – {this.props.DropoffDay}</small></td>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <td>{this.props.SubTotal} {this.props.CurrencyCode}</td>
                </tr>
                <tr>
                  <td>Taxes & Fees</td>
                  <td>{this.props.TaxesAndFees} {this.props.CurrencyCode}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>{this.props.TotalPrice} {this.props.CurrencyCode}</td>
                </tr>
              </tbody>
            </table>
            <Link to={this.props.DeepLink} target="_blank">
              RENT NOW!
            </Link>
          </div>
        </div>
      )
  }
})

RentalCar.propTypes = {
  CurrencyCode : React.PropTypes.string.isRequired,
  DeepLink : React.PropTypes.string.isRequired,
  ResultId: React.PropTypes.string.isRequired,
  HWRefNumber: React.PropTypes.string.isRequired,
  SubTotal: React.PropTypes.string.isRequired,
  TaxesAndFees: React.PropTypes.string.isRequired,
  TotalPrice:React.PropTypes.string.isRequired,
  CarTypeCode:React.PropTypes.string.isRequired,
  DailyRate:React.PropTypes.string.isRequired,
  DropoffDay:React.PropTypes.string.isRequired,
  DropoffTime:React.PropTypes.string.isRequired,
  PickupDay:React.PropTypes.string.isRequired,
  PickupTime:React.PropTypes.string.isRequired,
  LocationDescription: React.PropTypes.string.isRequired,
  MileageDescription:React.PropTypes.string.isRequired,
  RentalDays:React.PropTypes.string.isRequired
}

export default RentalCar;
