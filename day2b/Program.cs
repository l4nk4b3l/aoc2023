using System.Text.RegularExpressions;
using System.Threading.Channels;

var lines = File.ReadAllLines("./input.txt");

var sum = 0;

foreach(var line in lines)
{
    Game game = Game.FromLine(line);

    var mB = game.Reveals.Select(d => d.Blue).Max();
    var mG = game.Reveals.Select(d => d.Green).Max();
    var mR = game.Reveals.Select(d => d.Red).Max();

    var power = mB * mG * mR;
    Console.WriteLine(power);

    sum += power;
}

Console.WriteLine(sum);

public class Game
{
    public List<Reveal> Reveals { get; } = new List<Reveal>();

    private Game()
    {
        
    }

    public static Game FromLine(string line)
    {
        var game = new Game();
        
        // Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
        var match = Regex.Match(line, @"(Game \d+): (?<reveals>.+)");

        foreach (var reveal in match.Groups["reveals"].Value.Split(("; ")))
        {
            Reveal r = new Reveal();
            
            // "3 blue, 4 red"
            var cubeReveals = reveal.Split(", ");

            foreach (var cubeReveal in cubeReveals)
            {
                var parts = cubeReveal.Split(' ');
                int count = int.Parse(parts[0]);
                string color = parts[1];

                switch (color)
                {
                    case "blue":
                        r.Blue += count;
                        break;
                    
                    case "red":
                        r.Red += count;
                        break;
                    
                    case "green":
                        r.Green += count;
                        break;
                }
            }

            game.Reveals.Add(r);
        }

        return game;
    }
}

public class Reveal
{
    public int Red{ get; set; }
    public int Blue { get; set; }
    public int Green { get; set; }
}
