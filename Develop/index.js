// TODO: Include packages needed for this application
// Install Inquirer

// TODO: Create an array of questions for user input
const questions = [];

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeToFile);

const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'github_username',
            message: 'Enter your GitHub Username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email.',
        },
        {
            type: 'input',
            name: 'project_title',
            message: 'Enter your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a short description of your project.',
        },
        {
            type: 'checkbox',
            message: 'What license should your project have?',
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        // {
        //     type: 'input',
        //     name: 'installation',
        //     message: 'What command should be run to install dependencies?',
        //     default: npm i,
        //     when: (answers) => {
        //         return !fs.existsSync(npm i)
        //     }
        // }
        {
            type: 'input',
            name: 'test_command',
            message: 'What command should be run to run tests?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'What does the user need to know about contributing to the repo?',
        },
    ]);
};


// TODO: Create a function to write README file
function writeToFile(answers) {
    return `# ${answers.project_title}

    # Good ReadMe Generator

    ## Table of Contents
    * [Project Description](#project-description)
    * [Installation Instructions](#installation)
    * [Usage Guidelines](#usage-guidelines)
    * [License](#license)
    * [Contribution Guidelines](#contribution-guidelines)
    * [Test Instructions](#test-instructions)
    * [Questions](#questions)

    # Project Description 
    * ${answers.description}

    # Installation Instructions

    # Usage Guidelines
    * ${answers.usage}

    # License
    * This project is licensed under the ${answers.license}

    # Contribution Guidelines
    * ${answers.contributions}

    # Test Instructions
    * ${answers.test_command}

    ## Questions
    If you have any questions about the repom contact me directly at ${answers.email}. 
    You can find more of my work at [${answers.github_username}](http://github.com/${answers.github_username}).`;
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
