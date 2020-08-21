import React, { Component } from "react";

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

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form className="form">
          <input
            id="username"
            value={this.state.username}
            type="text"
            placeholder="Username"
            onChange={this.handleChange}
          ></input>
          <input
            id="email"
            value={this.state.email}
            type="email"
            placeholder="Email"
            onChange={this.handleChange}
          ></input>
          <input
            id="password"
            value={this.state.password}
            type="text"
            placeholder="Password"
            onChange={this.handleChange}
          ></input>
          <input type="submit" value="submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}
