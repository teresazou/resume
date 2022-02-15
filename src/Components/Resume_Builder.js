import "./Builder.css";
//import OpenModalBtn from "./AddBtn";
import React, { Component } from "react";

function formatPhoneNumber(value) {
  // if input value is falsy eg if the user deletes the input, then just return
  if (!value) return value;

  // clean the input for any non-digit values.
  const phoneNumber = value.replace(/[^\d]/g, "");

  // phoneNumberLength is used to know when to apply our formatting for the phone number
  const phoneNumberLength = phoneNumber.length;

  // we need to return the value with no formatting if its less then four digits
  // this is to avoid weird behavior that occurs if you  format the area code to early

  if (phoneNumberLength < 4) return phoneNumber;

  // if phoneNumberLength is greater than 4 and less the 7 we start to return
  // the formatted number
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  // finally, if the phoneNumberLength is greater then seven, we add the last
  // bit of formatting and return it.
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
}
class PD extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.onPersonalInfoChange(e.target);
  };

  handleNumber = (e) => {
    this.props.formattedPhoneNumber(formatPhoneNumber(e.target.value));
  };

  render() {
    return (
      <React.Fragment>
        <div className="B-PD-Box-1">
          <div>Personal Details</div>
          <form className="B-PD-Box-form">
            <input
              type="text"
              name="name"
              value={this.props.name}
              onChange={this.handleChange}
            ></input>
            <input
              type="text"
              name="phone"
              value={this.props.phone}
              onChange={this.handleNumber}
            />
            <input
              type="text"
              name="email"
              value={this.props.email}
              onChange={this.handleChange}
            ></input>
            <input
              type="text"
              name="address"
              value={this.props.address}
              onChange={this.handleChange}
            ></input>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
class Education extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = (e) => {
    this.props.onEduChange(e.target);
  };

  render() {
    return (
      <React.Fragment>
        {this.props.education.map((e) => (
          <div key={e.id}>
            <input
              type="text"
              id={e.id}
              name="school"
              value={e.school}
              onChange={this.handleChange}
            ></input>
            <input
              type="text"
              id={e.id}
              name="date"
              value={e.date}
              onChange={this.handleChange}
            ></input>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export { PD, Education };
