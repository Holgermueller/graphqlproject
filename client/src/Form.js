import React, { Component } from "react";

const form = {
  marginTop: "7%",
  marginRight: "auto",
  marginLeft: "auto",
  width: "55%",
  display: "flex",
};

export default class From extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   this.props.receiveDataFromForm();
  //   this.clearForm();
  // };

  clearForm = (e) => {
    this.setState({
      username: "",
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div>
        <form style={form}>
          <input
            id="username"
            value={this.state.username}
            type="text"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <input
            id="email"
            value={this.state.email}
            type="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            id="password"
            value={this.state.password}
            type="text"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="submit"
            onClick={this.props.receiveDataFromForm(this.state)}
          />
        </form>

        <hr />
      </div>
    );
  }
}
