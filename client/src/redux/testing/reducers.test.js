import reducer from "../reducers";
import * as types from "../actions/types";

describe("post reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      posts: {
        item: {},
        items: [],
      },
    });
  });

  it("should handle NEW_POST", () => {
    expect(
      reducer([], {
        type: types.NEW_POST,
        payload: "New post",
      })
    ).toEqual([
      {
        title: "hiohoeh",
        body: "ieowfeaoihe",
        id: 0,
      },
    ]);
  });
});
