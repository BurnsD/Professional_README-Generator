// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// Array of questions for user input
const questions = [
    // GitHub Username
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username'
    },
    // GitHub Repo
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
    },
    // Email
    {
        type: 'input',
        name: 'email',
        message: 'What is an Email people can contact you at about this project?'
    },
    // Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'

    },
    
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Decribe this project.'

    },
    // Installation
    { 
        type: 'input',
        name: 'installation',
        message: 'What does the user need to install to run this app (ie...dependencies)? (Skip with "Enter")'

    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'How is the app used? Give instructions'
    },
    // License 
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['MIT', 'APACHE 2.0', 'ISC', 'Mozilla', 'Academic', 'GNU', 'Open']
    },
    // Contributing
    {
        type: 'input',
        name: 'contrubiting',
        message: 'If you would like other developers to contribute, add guidelines for how to do so here.'
    },
    // Tests
    {
        type: 'input',
        name: 'test',
        message: 'What commands are needed to test this app?'
    },
];

// Writes README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
};

// Function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
       const markdown = generateMarkdown(answers);
       writeToFile('README.md', markdown)

    });
};

// Function call to initialize app
init();
