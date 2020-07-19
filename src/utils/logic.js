const and = (a, b) => a && b;
const or = (a, b) => a || b;
const equal = (a, b) => a === b;
const notEqual = (a, b) => a !== b;
const ternary = (a, b, c) => (a ? b : c);
const not = (a) => !a;
const greaterThan = (a, b) => a > b;

export {
  and, or, equal, ternary, not, notEqual, greaterThan,
};
