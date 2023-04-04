
 <h1 align="center"> Rolling the dice challenge! </h1>
  <h2 align="center"> with Improfit.ai </h2>


<img src="https://user-images.githubusercontent.com/96661791/229362714-eaa1dc7b-95af-4727-b4e4-ccb5ab642eea.png" alt="Imagen de cabecera" width="100%">


# Table of contents 💥
---

- [Description](#description)
- [Challenge](#challenge)
- [User Guide](#user-guide)
- [Installation guide](#installation-guide)
- [Dependencies](#dependencies)
- [Extra](#extra)
- [Future implementations](#future-implementations)
- [Conclusion](#conclusion)
- [Contributing](#contributing)
- [Author](#author)


# Description 📋
---
This task involves developing a Dice Roller game as a reusable React component. The game mechanics involve generating a target score and allowing the player to roll the dice to beat the target score. The application should have its own view to display the game and show relevant information during gameplay.


# Challenge 🚀
---


You are tasked with developing a simple Dice Roller application. This game’s rules are very straightforward:

There are a number of configurable dices in the game, called numberOfDices The visual output of the roll can be plain numbers (no need to draw the dices on the screen, but if you want to, you are welcome!) The game mechanics works according to this flow:

1. The game session start
2. A random number is generated based on the number of dices in the game.
This is the score that the player has to beat. We will call this targetScore
3. The player rolls the dices numberOfRolls times and gets a rollResult
4. If rollResult is higher than high score for this session, set highScore for this session = rollResult
5. Go back to step 3 until you rolled the dices numberOfRolls times
6. The player wins if highScore is higher than targetScore

## The Component

The game must be developed as an React Component, reusable from other Web applications

Decide how to package this component and the overall architecture.

The component must have its own view where the dice roll result will be visible as a number, as well as the view controls for rolling the dices

## The Application

The final application should: Control the game session Show the component view

React to game events by showing relevant info such as “You set a high score!” or “Your final high score is ...”, “Do you want to try again?” or “Congratulations! You won!”

Feel free to use any language, framework, library, pattern, architecture, design of your choice, explaining why you think that is the correct one for this task. The suggested frontend library for developing the application is React.

You can create a repository on GitHub and share your code once you solved the assignment


# User guide 📋
---
To use the project, follow these steps:

Run the command to start the simulation.

```
npm run dev
```

# Installation guide 🔍
---
1. Clone the repository: git clone https://github.com/lidiettes/improfit.ai-challenge.git
  
2. Install the dependencies: 
  ```
  npm install
  ```

3. Start: 
  
  ```
  npm run dev
  ```
  

# Dependencies 🛠️
  
**vite** : It is a build tool and development server that is designed to provide fast, efficient, and streamlined development experience for modern web applications using technologies such as React, Vue.js, and TypeScript. It achieves this by using a lightning-fast development server that leverages browser native ES modules to provide instantaneous updates, and a build process that generates highly optimized, production-ready bundles.
  
**react-scroll**: It is a library that provides smooth scrolling functionality for React applications, allowing users to smoothly scroll to a specific element or position within a page.

**react-router-dom**: It is a library that enables declarative routing for React applications.

# Extra
---
- Deploy en Netlify https://rollingthediceimprofit.netlify.app/

- I have taken the liberty of including the game on a page similar to Improfit's. I hope you like it.

- Responsive

# Future implementations 💪
---

1. Use TypeScript to improve scalability, code equality and productivity
2. Option to control the number of dice.
3. Testing, is a software testing technique that involves testing individual units, components, or modules of a software application in isolation from the rest of the system. 
 
# Conclusion 🍎
---
We hope you find the Rolling the dice to be a useful tool for enjoying your time. If you have any feedback or suggestions for improvement, please let us know!

# Contributing 🖇️
---
We welcome any contributions. To contribute, please follow these steps:

- Fork the repository by clicking the "Fork" button in the top right corner of this page.
  
* Clone the forked repository to your local machine by running git clone https://github.com/lidiettes/sc-challenge.gitin your terminal.
  
+ Create a new branch for your contribution by running git checkout -b [branch-name].
  
- Make your changes and test them thoroughly.
  
* Commit your changes by running git commit -m "[commit message]".
  
+ Push your changes to your forked repository by running git push origin [branch-name].
  
- Create a new pull request by navigating to your forked repository on GitHub, selecting the branch you just pushed, and clicking the "New pull request" button.
  
* Provide a clear and detailed description of your changes and why they are necessary.
  
+ We will review your pull request and provide feedback. Once it is approved, your changes will be merged.
  
- Thank you for your contributions! 🎉 

# Author ✨ 
---


[![](https://avatars.githubusercontent.com/u/96661791?s=120&v=4)](https://github.com/lidiettes)

[@lidiettes](https://github.com/lidiettes)
