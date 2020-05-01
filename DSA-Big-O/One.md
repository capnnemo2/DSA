## 1. What is the Big O for this?

1. Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

- O(1) constant

2. Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

- O(n) linear

## 2. Even or odd

What is the Big O of the following algorithm? Explain your answer

    function isEven(value) {
        if (value % 2 === 0) {
            return true;
        }
        else
            return false;
        }
    }

- O(1) constant because it only ever does one thing, only has one input

## 3. Are you here?

What is the Big O of the following algorithm? Explain your answer

    function areYouHere(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            const el1 = arr1[i];
            for (let j = 0; j < arr2.length; j++) {
                const el2 = arr2[j];
                if (el1 === el2) return true;
            }
        }
        return false;
    }

- O(n^2) polynomial/quadratic because there are two levels of nesting

## 4. Doubler

What is the Big O of the following algorithm? Explain your answer

    function doubleArrayValues(array) {
        for (let i = 0; i < array.length; i++) {
            array[i] *= 2;
        }
        return array;
    }

- O(n) linear because time complexity increases directly proportional to input increase

## 5. Naive search

What is the Big O of the following algorithm? Explain your answer

    function naiveSearch(array, item) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === item) {
                return i;
            }
        }
    }

- O(n) linear because, assuming the item is the last in the array, time will increase proportionally to input size

## 6. Creating pairs

What is the Big O of the following algorithm? Explain your answer

    function createPairs(arr) {
        for (let i = 0; i < arr.length; i++) {
            for(let j = i + 1; j < arr.length; j++) {
                console.log(arr[i] + ", " +  arr[j] );
            }
        }
    }

- O(n^2) polynomial/quadratic because there are two levels of nesting

## 7. Compute the sequence

What does the following algorithm do? What is its runtime complexity? Explain your answer

    function compute(num) {
        let result = [];
        for (let i = 1; i <= num; i++) {

            if (i === 1) {
                result.push(0);
            }
            else if (i === 2) {
                result.push(1);
            }
            else {
                result.push(result[i - 2] + result[i - 3]);
            }
        }
        return result;
    }

- Looks like Fibonacci sequence
- O(2^n) exponential

## 8. An efficient search

In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

    function efficientSearch(array, item) {
        let minIndex = 0;
        let maxIndex = array.length - 1;
        let currentIndex;
        let currentElement;

        while (minIndex <= maxIndex) {
            currentIndex = Math.floor((minIndex + maxIndex) / 2);
            currentElement = array[currentIndex];

            if (currentElement < item) {
                minIndex = currentIndex + 1;
            }
            else if (currentElement > item) {
                maxIndex = currentIndex - 1;
            }
            else {
                return currentIndex;
            }
        }
        return -1;
    }

- O(log(n)) logarithmic because you're halving the array each time through

## 9. Random Element

What is the Big O of the following algorithm? Explain your answer

    function findRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

- O(1) constant because it does one thing, regardless of size

## 10. What am I?

What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

    function isWhat(n) {
        if (n < 2 || n % 1 !== 0) {
            return false;
        }
        for (let i = 2; i < n; ++i) {
            if (n % i === 0) return false;
        }
        return true;
    }

- checks if n is prime
- O(?) had to look it up: O(sqrt(n))

## 11. Tower of Hanoi

The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

- There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
- The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk

- Derive an algorithm to solve the Tower of Hanoi puzzle.
- Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
- If you are given 5 disks, how do the rods look like after 7 recursive calls?
- How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
- What is the runtime of your algorithm?

Algorithm:

    function Hanoi(n, from, to, via) {
        if(n >= 1) {
            Hanoi(n-1, from, via, to);
            console.log(`Move disk from`, from, `to`, to);
            Hanoi(n-1, via, to, from);
        }
        return;
    }

- 3 disks = 7 moves
- 4 disks = 15 moves
- 5 disks = 31 moves
- 2^n - 1 = m
- O(2^n)

## 12. Iterative version

Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

1. Counting Sheep

Here we go:

    function countSheepAgain(sheep) {
        for (let i = 0; i <= sheep; i++) {
            let countBackwards = sheep - i;
            if(countBackwards == 0) {
                console.log(`All sheep jumped over the fence`);
            } else {
                console.log(`${countBackwards}: Another sheep jumped over the fence`);
            }
        }
    }

2. Power Calculator

Here we go:

    function repowerCalculator(base, exponent) {
        return Math.pow(base, exponent);
    }

3. Reverse String

Here we go:

    function reverseStringTakeTwo(string) {
        return string.split('').reverse().join('');
    }

4. nth Triangular Number

Here we go:

    function retriangulate(n) {
        let total = 0;
        for (let i = 0; i <= n; i ++) {
            total += i;
        }
        return total;
    }

5. String Splitter

Here we go:

    function splittinHairs(string, sep) {
        let results = [];
        for (let i = 0; i < string.length; i++) {
            let delimiter = string.indexOf(sep);
            let chunk = string.slice(0, delimiter);
            results.push(chunk);
            string = string.slice(delimiter + 1);
            if(string.indexOf(sep) == -1) {
                results.push(string)
            }
        }
        return results;
    }

6. Fibonacci

Here we go:

    function fibber(n) {
        let arr = [0, 1];
        for (let i = 2; i < n+1; i++) {
            arr.push(arr[ i-2 ] + arr[ i-1 ])
        }
        return arr[n];
    }

7. Factorial

Here we go:

    function factory(n) {
        if( n === 0 || n === 1) {
            return 1;
        }

        for (let i = n-1; i >= 1; i--) {
            n = n * i;
        }
        return n;
    }

## 13. Recursive Big O

Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.

1. Counting Sheep: O(n) linear
2. Power Calculator: O(n) linear
3. Reverse String: O(n) linear
4. nth Triangular Number: O(n) linear
5. String Splitter: O(n) linear
6. Fibonacci: O(2^n) exponential
7. Factorial: O(n) linear
8. OneWayMaze:
9. AllWaysMaze:
10. Anagrams: O(n^2) polynomial, quadratic
11. OrgChart:
12. BinaryRep:

## 14. Iterative Big O

Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.

1. Counting Sheep:
2. Power Calculator:
3. Reverse String:
4. nth Triangular Number:
5. String Splitter:
6. Fibonacci:
7. Factorial:
8. OneWayMaze:
9. AllWaysMaze:
10. Anagrams:
11. OrgChart:
12. BinaryRep:
