// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'name',
        message: 'Please enter the title of your project.',
        type: 'input'
    },
    {
        name: 'name2',
        message: 'Please enter a detailed description of your project.',
        type: 'input'
    },
    {
        name: 'name3',
        message: 'Please enter detailed installation instructions for your project.',
        type: 'input'
    },
    {
        name: 'name4',
        message: 'Please enter some contribution guidelines for your project.',
        type: 'input'
    },
    {
        name: 'name5',
        message: 'Please enter some test instructions for your project.',
        type: 'input'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(answer)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answer) => {
            writeToFile('README.md', answer)
        })
}

// Function call to initialize app
init();