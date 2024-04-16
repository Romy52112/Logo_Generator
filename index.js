const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./Lib/shapes')
const Svg = require('./Lib/svg')

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'What text do you want for your logo?',
        validate: text => text.length <=3 || "Not more than three characters"
    },
    {
        type: 'input',
        name: 'fontcolor',
        message: 'What color do you want for your text? '
    }, 
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for your logo',
        choices: ['Circle', 'Square', 'Triangle']
    }, 
    {
        type: 'input',
        name: 'color',
        message: 'What color do you want for your logo? '
    }, 
])

.then(answers => {
    let shape;
    if (answers.shape === 'Circle')shape = new Circle();
    else if (answers.shape === 'Square') shape = new Square();
    else shape = new Triangle();

    shape.setColor(answers.color)
    const svg = new Svg();
    svg.setText(answers.text, answers.fontcolor)
    svg.setShape(shape)
    fs.writeFile('logo.svg', svg.render(), err =>{
        if(err)console.log(err)
        else console.log('Generated logo.svg')
    })
})