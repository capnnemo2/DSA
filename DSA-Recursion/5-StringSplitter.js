// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

// function splitter(str, sep) {
//     return str.split(sep)
// }

// not recursive, but works
const stringSplitter = function (string, sep) {
  let results = [];

  for (let i = 0; i < string.length; i++) {
    let delimiter = string.indexOf(sep);
    let chunk = string.slice(0, delimiter);
    results.push(chunk);
    string = string.slice(delimiter + 1);
    console.log(string);
    if (string.indexOf(sep) == -1) {
      results.push(string);
    }
  }

  return results;
};

// RECURSIVE, DOESN'T QUITE WORK
const stringSplitter = function (string, sep) {
  let results = [];

  if (string.indexOf(sep) == -1) {
    results.push(string);
    return results;
  }

  let delimiter = string.indexOf(sep);
  let chunk = string.slice(0, delimiter);
  results.push(chunk);
  string = string.slice(delimiter + 1);
  stringSplitter(string, sep);

  return results;
};

// RECURSIVE, CLOSER TO WORKING, CUTS OFF LAST LETTER FROM STRING
// every time it runs it resets sepCount and the for loop...
const stringSplitter = function (string, sep) {
  let results = [];

  const sepCount = string.split(sep).length - 1;
  console.log(`number of sep`, sepCount);

  if (sepCount == 0) {
    console.log(`last string: `, string);
    results.push(string);
    return results;
  }

  for (let i = 0; i < sepCount + 1; i++) {
    let delimiter = string.indexOf(sep);
    let chunk = string.slice(0, delimiter);
    results.push(chunk);
    string = string.slice(delimiter + 1);
    console.log(`the string now reads: `, string);
    stringSplitter(string, sep);
  }
  return results;
};
