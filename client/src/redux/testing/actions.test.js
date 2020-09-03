import * as actions from "../actions/Actions";
import * as types from "../actions/types";

describe("actions", () => {
  it("should create an action to add a post", () => {
    const payload = {
      title: "hifoeiofea",
      body: "hgioewhjgoiewj jfiowjeiowje",
    };

    const expectedAction = {
      type: actions.NEW_POST,
      payload,
    };
    expect(actions.createPost(payload)).toEqual(expectedAction);
  });
});
