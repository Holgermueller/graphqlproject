import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import InfoDisplay from "./InfoDisplay";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      receivedData: {},
    };

    this.receiveDataFromForm = this.receiveDataFromForm.bind(this);
  }

  receiveDataFromForm(value) {
    return () => {
      this.setState({
        receivedData: value,
      });
      console.log(this.state.receivedData);
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Learning testing app</header>
        <Form receiveDataFromForm={this.receiveDataFromForm.bind(this)} />
        <InfoDisplay />
      </div>
    );
  }
}
