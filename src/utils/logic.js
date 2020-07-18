const and = (a, b) => a && b;
const or = (a, b) => a || b;
const equal = (a, b) => a === b;
const notEqual = (a, b) => a !== b;
const ternary = (a, b, c, d) => (a === b ? c : d);

export {
  and, or, equal, ternary, notEqual,
};
