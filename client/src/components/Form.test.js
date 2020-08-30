test("should call handleChange", () => {
  const handleChangeMock = jest.fn();

  const e = {
    preventDefault() {},
    target: { value: "body" },
  };

  expect(handleChangeMock).toBeCalledWith("body");
});
