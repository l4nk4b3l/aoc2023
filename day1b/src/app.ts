import * as fs from 'fs';

// Getting the Input
const content = fs.readFileSync('./src/input.txt', 'utf-8');

// Parsing Each Line
var lines = content.split("\n");

// Get the first and the last char that is a number
var numbers = lines.map((line) => {
    console.debug("");
    console.debug(line);

    // Replace words (one, two, three, four, five, six, seven, eight, and nine)
    var needles = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', '1', '2', '3' , '4', '5','6','7','8', '9'];

    var firstIndex = line.length;
    var lastLastIndex = -1;
    var first = 0;
    var last = 0;

    // Get the first matching word in the line
    for (let i = 0; i < needles.length; i++)
    {
        var indexOfWord = -1;

        while(true) 
        {
            var needle = needles[i];

            indexOfWord = line.indexOf(needle, indexOfWord + 1);

            if (indexOfWord == -1)
                break;

            var number = needle.length == 1 ? Number(needle) : needles.indexOf(needle) + 1;

            console.debug("Found " + needle + " on index " + indexOfWord + " normalized " + number);

            if (indexOfWord < firstIndex)
            {
                firstIndex = indexOfWord;
                first = number;
            }

            if (indexOfWord > lastLastIndex)
            {
                lastLastIndex = indexOfWord;
                last = number;
            }
        }
    }

    // Output the Number of the Line
    console.debug(first.toString() + last.toString());

 
    // Convert string to number
    return Number(first.toString() + last.toString());
});

// Calculate the sum
var sum = 0;

// Sum the numbers
numbers.forEach(number => {
    sum += number;
});

console.debug(sum);