// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    // Title
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project?'

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
        message: 'Describe the steps required to install this project.'

    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: ''
    },
    // Credits
    {
        type: 'input',
        name: 'credits',
        message: ''
    },
    // License 
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['MIT', 'APACHE 2.0']
    },
    // Badges
    {
        type: 'input',
        name: 'credits',
        message: ''
    },
    // Features
    {
        type: '',
        name: '',
        message: '',
        
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
       const markdown = generateMarkdown(answers);
       writeToFile('README.md', markdown)

    })
}

// Function call to initialize app
init();
