export const Add = (x, y) => x + y;

export const Total = (shipping, subTotal) => {
  return "$" + Add(shipping, subTotal);
};
