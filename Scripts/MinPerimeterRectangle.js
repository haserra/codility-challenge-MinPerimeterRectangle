// JavaScript source code


// Create UI

renderChallengeUI('Codility - Lesson 10 - Prime and composite numbers', 'Task 10.2 - MinPerimeterRectangle');

// Input options:

// 1. Define a const array

// let A = [0, 1, 1, 1, 1, 1, 1, 2, 2, 2];
// let A = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let A = [5,-7,3,5,-2,4,-1];
// let A = [3, 2, -6, 4, 0];
// let A = 1;
let A = Number(prompt('Please enter a positive integer within the range [1..1000000000].', 1));

// 2. Read array a from file TXT

//Using Node.js require to load the necessary txt file

//  I would need:

/*
let fs = require('fs');
let a = fs.readFileSync('input.txt').toString().split("\r\n");
*/

// 3. Generate Test Cases  automatically 


// 4. Solution

// Codility: The solution obtained perfect score on Friday, June 1st , 2018. (see screenshots )
let minPerimeterRectangle = solution(A);

function solution(N) {
    // find the number of its actors    
    let i = 1;
    //let minPerimeter = Number.MAX_VALUE;
    let perimeter;

    while (i * i <= N) {
        if (N % i == 0) {
            perimeter = 2 * (i + N / i);            
            //document.write(`P = 2 X (${i} + ${N / i}) = ${2 * (i + N / i)}`);
            //document.writeln();
            console.log(`P = 2 X (${i} + ${N / i}) = ${2 * (i + N / i)} \n`);
            // IMPORTANT: It's not necessary to calculate on each iteration the minimum, because it's decreasing  
            //minPerimeter = Math.min(minPerimeter, perimeter);
        }
        i++
    }
    //return minPerimeter
    return perimeter
}

writeOutputData(A,'input');
writeOutputData(minPerimeterRectangle,'output');


