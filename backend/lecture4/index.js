// Practice Project: Save a User's Favorite Quote to a File

import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([
   {
    type: 'input',
    name : 'userName',
    message: "What's your name?"
   },
   {
    type: 'input',
  name: 'userQuote',
  message: "What's your favorite quote?"
   }
  ])
  .then((answers) => {
    const name = answers.userName;
    const quote = answers.userQuote;
    // write the URL.txt file
        fs.writeFile(`${name}.txt`, `"${name} says :  ${quote}"`, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



























