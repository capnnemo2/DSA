// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// const powerCalculator = function (base, exponent) {
//   return Math.pow(base, exponent);
// };

// RECURSIVE, WORKS
const powerCalculator = function (base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  if (exponent === 1) {
    return base;
  }

  if (exponent < 0) {
    return `exponent should be >= 0`;
  }

  return base * powerCalculator(base, exponent - 1);
};
