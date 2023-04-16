const inquirer = require('inquirer');
const fs = require('fs');

const licenseDescriptionArray = [
    `   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.`,
    `    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.`,
    `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`,
    `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`,
    `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`,
    `Boost Software License - Version 1.0 - August 17th, 2003

Permission is hereby granted, free of charge, to any person or organization
obtaining a copy of the software and accompanying documentation covered by
this license (the "Software") to use, reproduce, display, distribute,
execute, and transmit the Software, and to prepare derivative works of the
Software, and to permit third-parties to whom the Software is furnished to
do so, all subject to the following:

The copyright notices in the Software and this entire statement, including
the above license grant, this restriction and the following disclaimer,
must be included in all copies of the Software, in whole or in part, and
all derivative works of the Software, unless such copies or derivative
works are solely in the form of machine-executable object code generated by
a source language processor.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.`,
    `The person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law.

You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.`,
    `THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE (“AGREEMENT”). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT’S ACCEPTANCE OF THIS AGREEMENT.`,
    `    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.`,
    `This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.`,
    `This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA`,
    `This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.`,
    `This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>`

]

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
    {
        name: 'questionUserName',
        message: 'Please enter your github username',
        type: 'input'
    },
    {
        name: 'questionEmail',
        message: 'Please enter your email address.',
        type: 'input'
    },
];

function writeToFile(fileName, data) {
    let readMeContent = '';
    let tableContents = '## Table of Contents\n';

    if (data.questionTitle && data.questionLicense != 'None') {
        readMeContent += `# ${data.questionTitle} `;
        switch (data.questionLicense) { // this switch statement contains all of the licenses that can be chosen when making a new repository
            case 'Apache License 2.0':
                readMeContent += ` [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n`
                var licenseDescription = licenseDescriptionArray[0];
                break;
            case 'GNU General Public License v3.0':
                readMeContent += `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n`
                var licenseDescription = licenseDescriptionArray[1];
                break;
            case 'MIT License':
                readMeContent += `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`
                var licenseDescription = licenseDescriptionArray[2];
                break;
            case 'BSD 2-Clause "Simplified" License':
                readMeContent += `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)\n`
                var licenseDescription = licenseDescriptionArray[3];
                break;
            case 'BSD 3-Clause "New" or "Revised" License':
                readMeContent += `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)\n`
                var licenseDescription = licenseDescriptionArray[4];
                break;
            case 'Boost Software License 1.0':
                readMeContent += `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)\n`
                var licenseDescription = licenseDescriptionArray[5];
                break;
            case 'Creative Commons Zero v1.0 Universal':
                readMeContent += `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)\n`
                var licenseDescription = licenseDescriptionArray[6];
                break;
            case 'Eclipse Public License 2.0':
                readMeContent += `[![License: EPL-2.0](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)\n`
                var licenseDescription = licenseDescriptionArray[7];
                break;
            case 'GNU Affero General Public License v3.0':
                readMeContent += `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)\n`
                var licenseDescription = licenseDescriptionArray[8];
                break;
            case 'GNU General Public License v2.0':
                readMeContent += `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)\n`
                var licenseDescription = licenseDescriptionArray[9];
                break;
            case 'GNU Lesser General Public License v2.1':
                readMeContent += `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)\n`
                var licenseDescription = licenseDescriptionArray[10];
                break;
            case 'Mozilla Public License 2.0':
                readMeContent += `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)\n`
                var licenseDescription = licenseDescriptionArray[11];
                break;
            case 'The Unilicense':
                readMeContent += `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)\n`
                var licenseDescription = licenseDescriptionArray[12];
                break;
        }
    }
    else if (data.questionTitle) {
        readMeContent += `# ${data.questionTitle}\n`;
    }
    if (data.questionDescription) {
        readMeContent += `\n## Description\n${data.questionDescription}\n`
        console.log('Description logged!')
    }
    if (tableContents) { // adds table of content based on what questions were answered
        if (data.questionInstallation) {
            tableContents += `- [Installation](#installation)\n`
        }
        if (data.questionUsage) {
            tableContents += `- [Usage](#usage)\n`
        }
        if (data.questionContribution) {
            tableContents += `- [Contribution Guidelines](#contribution-guidelines)\n`
        }
        if (data.questionTestInstructions) {
            tableContents += `- [Test Instructions](#test-instructions)\n`
        }
        if (data.questionLicense != 'None') {
            tableContents += `- [License](#license)\n`
        }
        if (data.questionUserName || data.questionEmail) {
            tableContents += `- [Questions](#questions)\n`
        }
        readMeContent += tableContents;
    }
    if (data.questionInstallation) {
        readMeContent += `## Installation\n${data.questionInstallation}\n`
        console.log('Installation instructions logged!')
    }
    if (data.questionUsage) {
        readMeContent += `## Usage\n${data.questionUsage}\n`
        console.log('Usage information logged!')
    }
    if (data.questionContribution) {
        readMeContent += `## Contribution Guidelines\n${data.questionContribution}\n`
        console.log('Contribution guidelines logged!')
    }
    if (data.questionTestInstructions) {
        readMeContent += `## Test Instructions\n${data.questionTestInstructions}\n`
        console.log('Test instructions logged!')
    }
    if (data.questionLicense != 'None') {
        readMeContent += `## License\n${licenseDescription}\n`
        console.log('License information logged!')
    }
    if (data.questionUserName && data.questionEmail) {
        readMeContent += `## Questions \n If you have any additional questions, then reach out to me with these links! \n Github Account: https://github.com/${data.questionUserName} \n Email Contact: ${data.questionEmail}\n`
        console.log('Github username and email logged!')
    }
    else if (data.questionUserName) {
        readMeContent += `## Questions\nIf you have any additional questions, then reach out to me with these links!\nGithub Account: https://github.com/${data.questionUserName}\n`
        console.log('Github username logged!')
    }
    else if (data.questionEmail) {
        readMeContent += `## Questions\nIf you have any additional questions, then reach out to me with these links!\nEmail Contact: ${data.questionEmail}\n`
        console.log('Email logged!')
    }
    fs.writeFile(fileName, readMeContent, (err) => {
        err ? console.error(err) : console.log('README.md created')
    })
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