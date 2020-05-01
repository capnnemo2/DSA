// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// RECURSIVE, WORKS
const Factorial = function (n) {
  if (n < 0) {
    return `try using positive numbers, Jack`;
  }
  if (n === 0) {
    return 1;
  }
  return Factorial(n - 1) * n;
};
