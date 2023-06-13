---
date: 2023-06-13
title: Stall like a boss on Rocket League
excerpt: I will explain how i have created a macro to stall like a boss on Rocket League
coverImage: /posts/rocket-league-stall-macro/cover.png
author: Sylvain Roh
---
## Introduction : Stall like a boss on Rocket League

I will explain my process of creating a highly effective macro that helped me 
to have the best stalling skills in Rocket League, surpassing the abilities of an ordinary player.

## Rocket League

Rocket League is an exciting game that combines soccer with fast-paced car action. 
You control rocket-powered cars on futuristic arenas, scoring goals and performing incredible maneuvers. 
It's easy to learn and offers thrilling multiplayer matches. 
With its active community and endless customization options, Rocket League delivers non-stop fun and excitement for gamers of all levels.

### Freestyling

Freestyling in Rocket League is all about scoring amazing goals and making perfect shots using advanced mechanical skills. 
It's a different style of play that focuses on individual and team creativity rather than competitive gameplay. 
Freestylers perform impressive aerial maneuvers, flips, and tricks to show off their skills and create visually stunning moments. 
While it's not directly connected to the competitive side of the game, freestyling has its own community that appreciates the artistry and spectacle of these incredible plays.


### Stalling

In Rocket League, a stall is a technique used by players to prevent their car from falling. 
It involves a combination of three simultaneous button presses: the jump button, steering left or right, and air rolling left or right. 
For example, if you steer left, you would need to air roll right and vice versa. 
Stalling requires extensive practice and skill to master and is primarily used for freestyling purposes. 
It's not particularly advantageous for competitive gameplay, but it allows players to showcase their creativity and perform impressive aerial maneuvers.

Exemple of a normal stall : [https://www.gifyourgame.com/WoollenCentristRabbidluigi](https://www.gifyourgame.com/WoollenCentristRabbidluigi).


## The macro

### Why another program to bind a macro ?

Yes, there are many existing macros available, some even integrated into controllers. Even the Steam Input feature allow you to create macros.

However, they have a limitation they only bind buttons together without allowing you to control the duration of key presses. 
That's where the problem lies. 
To achieve the best stall, speed can be crucial, and pressing the buttons as quickly as possible is essential. 
That's why I created my own macro. It allows me to set the duration of key presses, enabling me to be faster than a human player.

### The program

I have created a simple program in C# that allows me to bind keys together and control the duration of key presses.
I needed a library to interact with a controller, so I used [SharpDX](https://github.com/sharpdx/SharpDX).

I've decided to set up the macro on the `Y` button of my Xbox controller. 
When `Y` is pressed on the controller, the macro is activated, and the following keys are pressed simultaneously on the keyboard : `P`, `O`, `I` for a duration of 5 milliseconds.

I've set up the following variables :
![Variables](/posts/rocket-league-stall-macro/01-variables.png)

Then my program connect to the 1st controller connected to the computer and start to loop forever. 
In this loop, it will check if the `Y` button is pressed and if yes, then it will call the `SendInputWithAPI` function.
![Variables](/posts/rocket-league-stall-macro/02-logix.png)

Then with the function `SendInputWithAPI`, I will simulate that the `P`, `O`, `I` keys are pressed for 5 milliseconds.
I've used the `SendInput` function from the `user32.dll` library. (Source : [https://www.chriswirz.com/software/using-the-windows-api-to-simulate-keyboard-input-in-c-sharp](https://www.chriswirz.com/software/using-the-windows-api-to-simulate-keyboard-input-in-c-sharp))
![03-input.png](/posts/rocket-league-stall-macro/03-input.png)

### Result

Here is the result of the macro in action : [https://www.gifyourgame.com/DecentShieldlessCosmicguide](https://www.gifyourgame.com/DecentShieldlessCosmicguide).
You can see that the stall is very fast and that the car is really still.

## Conclusion

I hope you enjoyed this article and that it will help you to understand how I have proceeded to create this macro.