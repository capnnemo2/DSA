// You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path though the maze.

// The Maze is represented as a N*M matrix (in the below case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by *. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

// For the above maze, a possible exit path can be RRDDLLDDRRRRRR

let mySmallMaze = [
  [" ", " ", "*"],
  [" ", "*", " "],
  [" ", " ", "e"],
];

let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"],
];

const OneWayMaze = function (mazeArray, x, y) {
  if (x < 1 || x > mazeArray[0].length || y < 1 || y > mazeArray.length) {
    return false;
  }
  if (mazeArray[y][x] == "*") {
    return false;
  }

  //  we want to get from the top left to the bottom right
  // so default moves are right and down
  // if we can't move right, move down
  // if we can't move down, mark bad and move left
  // if we can't move left, mark bad and move up
};

// RECURSIVE, DOESN'T REALLY WORK
const OneWayMaze = function (mazeArr) {
  this.mazeArr = mazeArr;
  this.navigate = function (col, row) {
    if (mazeArr[col][row] == "e") {
      console.log(`Solved!`);
    } else if (mazeArr[col][row] == " ") {
      mazeArr[col][row] = 1;
      if (col < mazeArr.length - 1) {
        console.log(`move R`);
        this.navigate(col + 1, row);
      }
      if (row < mazeArr.length - 1) {
        console.log(`move D`);
        this.navigate(col, row + 1);
      }
      if (col > 0) {
        console.log(`move L`);
        this.navigate(col - 1, row);
      }
      if (row > 0) {
        console.log(`move U`);
        this.navigate(col, row - 1);
      }
    }
  };
};

let ms = new OneWayMaze(mySmallMaze);
ms.navigate(0, 0);
