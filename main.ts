#! /usr/bin/env node

import  inquirer  from "inquirer";

// 1) Computer will generate a number

// 2) User input for guesing number

// 3) Compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 10 );

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Plese Guess a number (1-10) ",
    },
]);


if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation! You guess right number.");
}

else{
    console.log("Sorry! You guess wrong number.");
    
}

