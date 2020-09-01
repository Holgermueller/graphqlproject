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
      reducer(
        {},
        {
          type: types.NEW_POST,
          item: {
            title: "blah",
            body: "blabblbabalbalba",
          },
        }
      )
    ).toEqual({
      posts: {
        item: {
          title: "blah",
          body: "blabblbabalbalba",
          id: 0,
        },
        items: [],
      },
    });
  });
});
