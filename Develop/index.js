// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
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
            message: 'Enter your project title.',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'list',
            message: 'What license should your project have?',
            name: 'license',
            choices: ['MIT', 'Apache', 'GPL 3.0', 'ISC', 'None'],
        },
        {
            type: 'input',
            name: 'test_command',
            message: 'What command should be run to run tests?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, including any tutorials used.',
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'What does the user need to know about contributing to the repo?',
        },
    ]);
};


// TODO: Create a function to write README file
const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create a function to initialize app

function init() {
    promptUser()
    .then((data) => writeFileAsync('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully created!'))
    .catch((err) => console.error(err)); 
};

// Function call to initialize app
init();
