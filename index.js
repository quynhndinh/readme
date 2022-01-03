// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is a description of the project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the instructions for installation?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Describe how to use this repo',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What command should be used to run tests?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Choose the license for your project.',
        name: 'license',
        choices: ['MIT','Apache','no license'],
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    ];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Readme Generated')
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        var readmeAnswer = generateMarkdown(answers);
        writeToFile("README.md", readmeAnswer);
    });
};
// Function call to initialize app
init();
