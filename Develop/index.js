
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const filename = "ReadMe.md";

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project's title?",
        name: "title"
    },
    
    {
        type: "input",
        message: "Please enter a brief description of your project",
        name: "description"
    },
    {
        type: "list",
        message: "What lisence does this project use?",
        default: "( Use arrow keys)",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        name: "license"
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        default: "npm i",
        name: "install"
    },
    {
        type: "input",
        message: "How should the user run tests?",
        default: "npm test",
        name: "test"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribution"
    }
    
    
];


// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (data) {
        const markdown = generateMarkdown(data)
        fs.writeFile(filename, markdown, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("File written to ReadMe.md");
        })
    })
}

// function call to initialize program
init();