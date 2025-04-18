/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
// chat gbt 
// import inquirer from 'inquirer';
// import qr from 'qr-image';
// import fs from 'fs';

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'url',
//       message: 'Enter the URL to generate QR code:',
//     },
//   ])
//   .then((answers) => {
//     const url = answers.url;

//     const qr_svg = qr.image(url, { type: 'png' });
//     qr_svg.pipe(fs.createWriteStream('qr-code.png'));
//     console.log('✅ QR code saved as qr-code.png');
// //========================================
//     fs.writeFile('user_input.txt', url, (err) => {
//       if (err) throw err;
//       console.log('✅ User input saved to user_input.txt');
//     });
//   })
//   .catch((error) => {
//     console.error('❌ Something went wrong:', error);
//   });


// my teacher 

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });





















