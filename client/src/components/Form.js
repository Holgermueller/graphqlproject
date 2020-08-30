import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../redux/actions/Actions";

const form = {
  marginTop: "7%",
  marginRight: "auto",
  marginLeft: "auto",
  width: "55%",
  display: "flex",
};

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    this.props.createPost(post);

    this.clearForm();
  };

  clearForm = (e) => {
    this.setState({
      title: "",
      body: "",
    });
  };

  render() {
    return (
      <div>
        <form style={form} onSubmit={this.onSubmit}>
          <input
            name="titleInput"
            id="title"
            value={this.state.title}
            type="text"
            placeholder="Title"
            onChange={this.handleChange}
          />

          <textarea
            name="bodyInput"
            id="body"
            value={this.state.body}
            onChange={this.handleChange}
            placeholder="Body"
          />

          <input name="submit" type="submit" value="submit" />
        </form>

        <hr />
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
