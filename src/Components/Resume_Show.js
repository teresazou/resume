import React, { Component } from "react";
import "../Components/show.css";
import phone from "../phone.png";
import email from "../email.png";
import address from "../address.png";
class S_PD extends Component {
  render() {
    return (
      <div className="S-PD-Box-1">
        <h1 className="name">{this.props.name}</h1>
        <div className="S-PD-Box-2">
          <div className="number">
            <img src={phone} alt="phone" />:<div>{this.props.phone}</div>
          </div>
          <div className="email">
            <img src={email} alt="mail" />:<div>{this.props.email}</div>
          </div>
          <div className="address">
            <img src={address} alt="address" />: <div>{this.props.address}</div>
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export { S_PD };
