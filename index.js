// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const colorGenerate = require("./Develope/color");
const {Triangle, Circle, Square} = require("./Develope/shape");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'list',
        message: 'what shape do you want your Logo?',
        name: "shape",
        choices: [
            'Tringle',
            'squire',
            'circle'
        ]
    },
    {
        type: 'list',
        message: 'what color is your body',
        name: "color",
        choices: [
            'Red',
            'blue',
            'green'
        ]
    },
    {
        type: 'input',
        message: 'write down your text here?',
        name: 'text'
    },
    {
        type: 'list',
        message: 'what color is your text',
        name: "textColor",
        choices: [
            'Red',
            'blue',
            'green'
        ]
    },

]

// TODO: Create a function to write README file
inquirer.prompt(questions).then(responses => {
    console.log(responses)
    const shape = new Triangle (responses.color, responses.text, responses.textColor)
    fs.writeFile('shape.SVG', shape.render(), (err) =>     /// JSON.text ?
    err ? console.log(err) : console.log('Commit logged!')
    );
})



// 1. WHEN I PROMPT FOR A TEXT - then enter upto 3 characters.
// 2. when i PROMPT TEXT COLOR -then i can enter a color keyword. 
// 3. WHEN I PROMPT SHAPE - i am presented to choose from circle tringle or square.
// 4. WHEN I ENTER FOR ALL PROMPTES - THEN svg FILE IS CREATED NAMED `LOGO.SVG `
// 5. WHEN I OPEN LOGO.SVG FILE IN BROWSER, I GET 300x200 PIXEL IMAGE THAT MATCHES THE CRETERIA
