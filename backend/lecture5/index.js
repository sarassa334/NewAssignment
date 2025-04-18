// Challenge #2: Simple Todo List (File-based)

import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([
    {
        type:'input',
        name:'task',
        message: "please enter a task : ",
    }
  ])
  .then((answers) => {
   const userTask = answers.task;

   fs.appendFile('todo.txt', `${userTask}\n`, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 
   
  fs.readFile('./todo.txt', 'utf8', (err, data) => {
    if (err) return console.error('Error reading file:', err);
    console.log('Your Todo List : \n',  `${data}\n`);
});
  
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



























