import * as fs from 'fs';
import { cwd } from 'process';

/*
Determine which games would have been possible if the bag had been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes. 
What is the sum of the IDs of those games?

Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
*/

// I need the ID of the Game 
// I need to sum the number of the cube per color


// Getting the Input
const content = fs.readFileSync('./src/input.txt', 'utf-8');

// Parsing each line
var games = content.split("\r\n");

var sum = 0;

var maxBlue = 14;
var maxGreen = 13;
var maxRed = 12;


for (let i = 0; i < games.length; i++) 
{
    var game = games[i];
    
    var split1 = game.split(': ');
    
    // Getting the Game ID
    var gameId = split1[0].split(' ')[1];

    console.log(gameId);
    
    //3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
    var reveals = split1[1].split('; ');

    var isGamePossible = true;
 
    // 0: 3 blue, 4 red
    // 1: 1 red, 2 green, 6 blue
    // 2: 2 green
    for (let r = 0; r < reveals.length; r++)
    {
        console.log("reveal " + r);

        var cubes = reveals[r].split(', ');
       
        var blue = 0;
        var red = 0;
        var green = 0;

        for (let c = 0; c < cubes.length; c++)
        {
            // 3 blue
            var turn = cubes[c];
            var data = turn.split(' ');

            var count = Number(data[0]);
            var color = data[1];
            
            if (color == 'blue')
            {
                blue += count;
            }
            else if (color == 'red')
            {
                red += count;
            }
            else if (color == 'green')
            {
                green += count;
            }

            if (blue > maxBlue)
            {
                isGamePossible = false;
                continue;
            }
    
            if (red > maxRed)
            {
                isGamePossible = false;
                continue;
            }
    
            if (green > maxGreen)
            {
                isGamePossible = false;
                continue;
            }
        }

        console.log(gameId + " possible " + isGamePossible);
        console.log("B: " + blue);
        console.log("R: " + red);
        console.log("G: " + green);    
    }

    if (isGamePossible)
        sum += Number(gameId);
}

console.log("Result: " + sum);