import { S_PD } from "./Components/Resume_Show";
import { PD, Education } from "./Components/Resume_Builder";
import "./style.css";
import "./Components/Builder.css";
import "./Components/show.css";
import React, { Component } from "react";
import "./Components/Builder.css";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Name",
      phone: "840-302-5549",
      email: "email",
      address: "address",
      edu: [
        {
          school: "UCLA",
          date: "2023-2024",
          Degree: "BA",
          field: "MATH",
          location: "LA",
          id: uniqid(),
        },
        {
          school: "BU",
          date: "2023-2024",
          degree: "BA",
          field: "MATH",
          location: "LA",
          id: uniqid(),
        },
      ],
    };
  }
  NameChanged = (val) => {
    this.setState({ [val.name]: val.value });
  };
  NumberChanged = (value) => {
    this.setState({ phone: value });
  };
  eduChanged = (val) => {
    this.setState((prevState) => ({
      edu: prevState.edu.map((obj) =>
        obj.id === val.id
          ? Object.assign(obj, { [val.name]: [val.value] })
          : obj
      ),
    }));
  };

  render() {
    return (
      <div className="App">
        <div className="builder-outer-box">
          <PD
            name={this.state.name}
            onPersonalInfoChange={this.NameChanged}
            formattedPhoneNumber={this.NumberChanged}
            phone={this.state.phone}
            email={this.state.email}
            address={this.state.address}
          />
          <Education education={this.state.edu} onEduChange={this.eduChanged} />
        </div>
        <div className="show-outer-box">
          <S_PD
            name={this.state.name}
            email={this.state.email}
            address={this.state.address}
            phone={this.state.phone}
          />
        </div>
      </div>
    );
  }
}

export default App;
