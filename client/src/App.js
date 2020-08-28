import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import InfoDisplay from "./components/InfoDisplay";
import { Provider } from "react-redux";
import store from "./store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">Learning redux and testing app</header>
          <Form />
          <InfoDisplay />
        </div>
      </Provider>
    );
  }
}
