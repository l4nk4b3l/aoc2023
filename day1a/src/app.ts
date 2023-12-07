import * as fs from 'fs';

// Getting the Input
const content = fs.readFileSync('./src/input.txt', 'utf-8');

// Parsing Each Line
var lines = content.split("\n");

// Get the first and the last char that is a number
var numbers = lines.map((line) => {
    // Replace all non letters
    var lineWithoutLetters = line.replace(/[^0-9.]/g, '');

    var first = lineWithoutLetters.charAt(0);
    var last = lineWithoutLetters.charAt(lineWithoutLetters.length - 1);

    // Convert string to number
    return Number(first + last);
});

// Calculate the sum
var sum = 0;

// Sum the numbers
numbers.forEach(number => {
    sum += number;
});

console.debug(sum);