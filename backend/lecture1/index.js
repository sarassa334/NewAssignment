// console.log('hello text');
//=====================================================

// const fs = require("fs"); // fs (library name) / require (method)

// fs.writeFile("message.txt", "hello from node js sara", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

//=====================================================

// const fs = require("fs");

// fs.readFile("./message.txt", 'utf-8',(err, data) => {
//     if (err) throw err;
//     console.log(data.toUpperCase()); // show the text clearly
// });

//=====================================================
// sillyname module

// var generateName = require("sillyname");
// var name = generateName();

// console.log(`My name is ${name}`);

//=====================================================
// assignment 

const fs = require('fs');

const filePath = 'mydata.txt';

// Step 1: Create some sample text with extra spaces
const originalText = '   Hello Othman, Welcome to Node.js. Node.js is Awesome!   ';

// Step 2: Write the text to the file
fs.writeFile(filePath, originalText, (err) => {
  if (err) return console.error('Error writing file:', err);

  // Step 3: Read the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return console.error('Error reading file:', err);

    // Step 4: Apply string methods
    const trimmed = data.trim();                       // Remove extra spaces
    const lower = trimmed.toLowerCase();              // Convert to lowercase
    const replaced = lower.replace('node.js', 'JS');  // Replace "node.js" with "JS"
    const words = replaced.split(' ');                // Split into words
    const containsWord = replaced.includes('othman'); // Check if it includes "othman"

    // Step 5: Show the results
    console.log('Original:', data);
    console.log('Trimmed:', trimmed);
    console.log('Lowercase:', lower);
    console.log('Replaced:', replaced);
    console.log('Words Array:', words);
    console.log('Includes "othman"?', containsWord);
  });
});










