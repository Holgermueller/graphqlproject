import * as actions from "../actions/Actions";
import * as types from "../actions/types";

describe("actions", () => {
  it("should create an action to add an item", () => {
    const post = {
      title: "hifoeiofea",
      body: "hgioewhjgoiewj jfiowjeiowje",
    };
    const createPost = {
      type: types.NEW_POST,
      post,
    };
    expect(actions.createPost(post)).toBe(createPost);
  });
});
