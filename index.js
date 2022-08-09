// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = []; {
    // using inquirer to prompt questions to user
    return inquirer.createPromptModule(
{
type: 'input',
name: 'github',
message: 'What is your GitHub username?',
validate: nameInput => {
    if (nameInput) {
    return true;
} else {
    console.log('Please enter your GitHub username');
    return false;
}
}
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Enter your email');
            return false;
    }
}
},
{
    type: 'input',
    name: 'title',
    message: 'What is your project name?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Enter a description of your project');
            return false;
        }
    }
},
{
    type: 'list',
    name: 'description',
    message: 'Write a description of your project.',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Enter a description of your project');
            return false;
        }
    }

},
{
    type: 'list',
    name: 'license',
    message: 'What kind of license your project should have?',
    choices: ['MIT', 'GNU'],
    default: ['MIT'],
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Choose a license');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'install',
    message: 'What are the steps to install your project?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Enter the steps to install your project');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'How do i use this app?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Enter a description');
            return false;
        }
    }
},
{
    
    type: 'input',
    name: 'test',
    message: 'What command do you use to run tests?',
    default: 'npm test'
    
},
{
    type: 'input',
    name: 'contributors',
    message: 'What does the user need to know about contributing to the repo?'
  }
);
};

// TODO: Create a function to write README file
const  writeToFile =  data => {
    fs.writeFile('README.md', data, err => {
        //if there's a error
        if (err) {
            console.log(err);
            return;
            //When the README has been created
        } else {
            console.log('Your README file is created')
        }
    })
};

//  function to initialize app
questions()
// getting user answers
.then(answers => {
    return generatePage(answers);
})
// using data to display on page
.then(data => {
    return fs.writeFile(data);
})
//catching errors
.catch(err => {
    console.log(err)
})

