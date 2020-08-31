import React from "react";
import { shallow } from "enzyme";
import PostForm from "./Form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../redux/actions/Actions";

it("renders without crashing", () => {
  shallow(<PostForm />);
});
