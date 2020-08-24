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
  }

  receiveDataFromForm(dataFromForm) {
    this.setState({ receivedData: dataFromForm });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Learning testing app</header>
        <Form />
        <InfoDisplay />
      </div>
    );
  }
}
