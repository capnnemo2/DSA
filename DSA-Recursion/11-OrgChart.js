// Write a recursive function that prints the following organization chart. Your output should be as shown below with proper indentation to show the hierarchy. You may store the org chart in an object and send that as an input to your program.

const orgChart = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {},
      },
      Zhao: {
        Richie: {},
        Sofia: {},
        Jen: {},
      },
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {},
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {},
      },
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {},
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {},
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {},
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {},
      },
    },
  },
};

// first level of object: print w/o indentation
// second level of object: print w/one indentation
// third level indent twice
// fourth level indent thrice
// each and every entry on a new line

// RECURSIVE, BUT NO INDENTATION
// need a way to count how deep in the object key is nested and add that many indentations
const printChart = (obj) => {
  Object.keys(obj).forEach((key) => {
    console.log(key);

    if (typeof obj[key] === "object") {
      printChart(obj[key]);
    }
  });
};

printChart(orgChart);
