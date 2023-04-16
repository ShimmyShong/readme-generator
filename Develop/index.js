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
    {
        name: 'questionLicense',
        message: 'What license are you using?',
        type: 'list',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unilicense']
    },
];

async function writeToFile(fileName, data) {
    try {
        await fs.truncate(fileName, 0, (err) => { // this resets the README.md every time the function is called
            err ? console.error(err) : console.log('README contents reset.')
        })

        if (data.questionTitle && data.questionLicense != 'None') {
            switch (data.questionLicense) { // this switch statement contains all of the licenses that can be chosen when making a new repository
                case 'Apache License 2.0':
                    fs.appendFile(fileName, `# ${data.questionTitle} [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n`, (err) => {
                        err ? console.error(err) : console.log('Title and License logged!')
                    })
                    break;
                case 'GNU General Public License v3.0':
                    fs.appendFile(fileName, `# ${data.questionTitle} [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n`, (err) => {
                        err ? console.error(err) : console.log('Title and License logged!')
                    })
                    break;
                case 'MIT License':
                    fs.appendFile(fileName, `# ${data.questionTitle} [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`, (err) => {
                        err ? console.error(err) : console.log('Title and License logged!')
                    })
                    break;
                case 'BSD 2-Clause "Simplified" License':
                    fs.appendFile(fileName, `# ${data.questionTitle} [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)\n`, (err) => {
                        err ? console.error(err) : console.log('Title and License logged!')
                    })
                    break;
                case 'BSD 3-Clause "New" or "Revised" License':
                    fs.appendFile(fileName, `# ${data.questionTitle} [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)\n`, (err) => {
                        err ? console.error(err) : console.log('Title and License logged!')
                    })
                    break;
                case 'Boost Software License 1.0':
                    fs.appendFile(fileName, `# ${data.questionTitle} [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)\n`, (err) => {
                        err ? console.error(err) : console.log('Title and License logged!')
                    })
                    break;
                case 'Creative Commons Zero v1.0 Universal':
                    fs.appendFile(fileName, `# ${data.questionTitle} [![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)\n`, (err) => {
                        err ? console.error(err) : console.log('Title and License logged!')
                    })
                    break;
                case 'Eclipse Public License 2.0':
                    fs.appendFile(fileName, `# ${data.questionTitle} [![License: EPL-2.0](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)\n`, (err) => {
                        err ? console.error(err) : console.log('Title and License logged!')
                    })
                    break;
                case 'GNU Affero General Public License v3.0':
                    fs.appendFile(fileName, `# ${data.questionTitle} [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)\n`, (err) => {
                        err ? console.error(err) : console.log('Title and License logged!')
                    })
                    break;
                case 'GNU General Public License v2.0':
                    fs.appendFile(fileName, `# ${data.questionTitle} [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)\n`, (err) => {
                        err ? console.error(err) : console.log('Title and License logged!')
                    })
                    break;
                case 'GNU Lesser General Public License v2.1':
                    fs.appendFile(fileName, `# ${data.questionTitle} [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)\n`, (err) => {
                        err ? console.error(err) : console.log('Title and License logged!')
                    })
                    break;
                case 'Mozilla Public License 2.0':
                    fs.appendFile(fileName, `# ${data.questionTitle} [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)\n`, (err) => {
                        err ? console.error(err) : console.log('Title and License logged!')
                    })
                    break;
                case 'The Unilicense':
                    fs.appendFile(fileName, `# ${data.questionTitle} [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)\n`, (err) => {
                        err ? console.error(err) : console.log('Title and License logged!')
                    })
                    break;
            }
        }
        else if (data.questionTitle) {
            await fs.appendFile(fileName, `# ${data.questionTitle}\n`, (err) => {
                err ? console.error(err) : console.log('Title logged!')
            })
        }
        if (data.questionDescription) {
            await fs.appendFile(fileName, `## Description\n${data.questionDescription}\n`, (err) => {
                err ? console.error(err) : console.log('Description logged!')
            })
        }
        if (data.questionInstallation) {
            await fs.appendFile(fileName, `## Installation\n${data.questionInstallation}\n`, (err) => {
                err ? console.error(err) : console.log('Installation instructions logged!')
            })
        }
        if (data.questionUsage) {
            await fs.appendFile(fileName, `## Usage\n${data.questionUsage}\n`, (err) => {
                err ? console.error(err) : console.log('Usage information logged!')
            })
        }
        if (data.questionContribution) {
            await fs.appendFile(fileName, `## Contribution Guidelines\n${data.questionContribution}\n`, (err) => {
                err ? console.error(err) : console.log('Contribution guidelines logged!')
            })
        }
        if (data.questionTestInstructions) {
            await fs.appendFile(fileName, `## Test Instructions\n${data.questionTestInstructions}\n`, (err) => {
                err ? console.error(err) : console.log('Test instructions logged!')
            })
        }
    }
    catch (err) {
        console.error(err);
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