import { Add } from "./Add";

//Unit test

test("add", () => {
  //   const value = Add(1, 2);
  //   expect(value).toBe(3);

  expect(Add(1, 3)).toBe(4);
  expect(Add(2, 7)).toBe(9);
});
