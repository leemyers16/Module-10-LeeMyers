const inquirer = require('inquirer');
console.log('hello')
inquirer
  .prompt([
    /* Pass your questions in here */
    "What is the team managers name?",
    "What is the employee ID?",
    "What is the email address?",
    "What is the office number?",

  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    let teammanagername = answers[0]; 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });