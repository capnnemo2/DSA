// Write a recursive function that prints out the binary representation of a given number. For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.

// RECURSIVE, WORKS
const BinaryConstructor = function (n) {
  if (n === 0) {
    return 0;
  }
  return (n % 2) + 10 * BinaryConstructor(Math.floor(n / 2));
};
