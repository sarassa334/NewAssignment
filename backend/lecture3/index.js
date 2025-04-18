// trying to solve the assignment of lectur2 (monday ? 14/4)
// the code :

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{
     message: "type in your URL: ",
     name: "URL" 
    }])
  .then((answers) => {//runs on success
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png")); // create qr_img.png image

    // write the URL.txt file
    fs.writeFile('URL.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });      
  })
  // nothing changed here
  .catch((error) => {//runs on failure.
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

//chat gbt explanation and my notes

// first we does this in the terminal : cd backend/lecture3
// second : npm init
// third : npm i inquirer qr-image
// now the code :

//   1. inquirer.prompt()
//   This is the main method you’ll use to ask the user questions. It’s an asynchronous function, meaning it waits for the user to respond before continuing to the next part of your code.
//   What does .prompt() do?
//   It accepts an array of question objects that define what kind of questions will be asked to the user.
//   Each question is an object with properties that define how the question should behave.
