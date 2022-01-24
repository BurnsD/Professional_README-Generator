// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const generateMarkdown = require('./utils/generateMarkdown.js');


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
        message: 'What does the user need to install to run this app (ie... dependencies)? (Skip with "Enter")'

    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'How is the app used? Give instructions.'
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
        message: 'If you would like other developers to contribute, add guidelines for how to do so here. (Skip with "Enter")'
    },
    // Tests
    {
        type: 'input',
        name: 'test',
        message: 'What commands are needed to test this app? (Skip with "Enter")'
    },
];

// Writes README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README.md has been completed!")
    });
}
const writeFileAsync = util.promisify(writeToFile);
// Function to initialize app
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        console.log(answers);
        // Markdown to file
        const markdown = generateMarkdown(answers);
        await writeFileAsync('NewREADME.md', markdown);
    } catch (error) {
        console.log(error);
    }
};
// Function call to initialize app
init();