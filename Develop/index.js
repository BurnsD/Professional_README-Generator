// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
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
        message: 'Describe the steps required to install this project or skip.'

    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    // Credits
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any. Along with any third-party assets or tutorials followed.'
    },
    // License 
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['MIT', 'APACHE 2.0', 'ISC', 'Mozilla', 'Academic', 'GNU', 'Open']
    },
    // Badges
    {
        type: 'input',
        name: 'badges',
        message: ''
    },
    // Features
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, add some description to them here.',
        
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
        message: 'If you have written any tests, provide examples on how to run them here.'
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

    });
};

// Function call to initialize app
init();
