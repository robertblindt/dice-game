# Dice Project
#### Using Bootstrap and Javascript:
This project was a weekend project for Coding Temple.  The goal of the project was to create a one player 'Dice game' where you rolled 6 dice and tried to get a score of 10,000 using Javascript. Although it is currently a 1 player game, I intended to expand it to 2 players, but I am still dealing with construction in my work room so I have only had limited time to work on this.(You'll see scraps of where I intended to continue working)  I took an OOP approach to the game, and just hard coded in the player model in the game class in the end so it could easily be substituted for a player class.

## Project Description:
In this repository there is an index.html that when ran locally should allow you to play a 1 player dice game.  This game created using only Javascript to create, run, and track the game.  Although my kneejerk reaction was to create the game and players instances in python and then just use javascript to populate the dice and interface with the game, I thought it would be more fun to push myself to work a bit more with the Javascript.

In the static folder, you will find a CSS folder that contains very minimal styling that compliments some of the built in bootstrap color schemes and makes the page easier on the eyes.  There is also a JS folder that contains the javascript file that runs the game and website. 

## Installing, Running, and How to use:
You should be able to just clone this repository, open the index.html, and run it in a 'live server' like app without making any modifications or other installs.  The items in my gitignore are just the typical IDE metadata things that don't need to be sent to github.  

## Future Improvement:
- Modularize the Javascript
    - Right now there are repeated lines in a few spots.  It would be easier to read if I modularized the code a bit more.  It might also point to other places to simplify everything, as it feels a little spaghetti code-y right now.

- Make game multi-player
    - I think by replacing the individual player instance that I hard coded into the game class with an empty list and then passing in a 'playerInstance' class, it could be easily made multi-player by adding a while loop that looked for a player to have a 'maxScore' and then wrap the roll function in a for loop that just passed back and forth between the player instances it would become multiplayer

- Make it look prettier
    - The dice are set in normal 'col' classes right now.  Because the card is a child to a container, using the bootstrap adaptive column feature is a little uncooperative as it sits right now.  