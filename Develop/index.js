// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'questionTitle',
        message: `Please enter the title of your project.`,
        type: 'input'
    },
    {
        name: 'questionDescription',
        message: 'Please enter a detailed description of your project.',
        type: 'input'
    },
    {
        name: 'questionInstallation',
        message: 'Please enter detailed installation instructions for your project.',
        type: 'input'
    },
    {
        name: 'questionUsage',
        message: 'Please enter usage information for your project.',
        type: 'input'
    },
    {
        name: 'questionContribution',
        message: 'Please enter some contribution guidelines for your project.',
        type: 'input'
    },
    {
        name: 'questionTestInstructions',
        message: 'Please enter some test instructions for your project.',
        type: 'input'
    },
];

function writeToFile(fileName, data) {
    fs.truncate(fileName, 0, (err) => { // this resets the README.md every time the function is called
        err ? console.error(err) : console.log('README contents reset.')
    })

    if (data.questionTitle) {
        fs.appendFile(fileName, `# ${data.questionTitle}\n`, (err) => {
            err ? console.error(err) : console.log('Title logged!')
        })
    }
    if (data.questionDescription) {
        fs.appendFile(fileName, `## Description\n${data.questionDescription}\n`, (err) => {
            err ? console.error(err) : console.log('Description logged!')
        })
    }
    if (data.questionInstallation) {
        fs.appendFile(fileName, `## Installation\n${data.questionInstallation}\n`, (err) => {
            err ? console.error(err) : console.log('Installation instructions logged!')
        })
    }
    if (data.questionContribution) {
        fs.appendFile(fileName, `## Contribution Guidelines\n${data.questionContribution}\n`, (err) => {
            err ? console.error(err) : console.log('Contribution guidelines logged!')
        })
    }
    if (data.questionUsage) {
        fs.appendFile(fileName, `## Usage\n${data.questionUsage}\n`, (err) => {
            err ? console.error(err) : console.log('Usage information logged!')
        })
    }
    if (data.questionTestInstructions) {
        fs.appendFile(fileName, `## Test Instructions\n${data.questionTestInstructions}\n`, (err) => {
            err ? console.error(err) : console.log('Test instructions logged!')
        })
    }

}

function init() {
    inquirer
        .prompt(questions)
        .then((answer) => {
            writeToFile('README.md', answer)
        })
}

// Function call to initialize app
init();