import React from "react";
import { shallow, mount, render } from "enzyme";
import Form from "./Form";
import renderer from "react-test-renderer";

it("should render without throwing an error", () => {
  shallow(<Form />);
});
