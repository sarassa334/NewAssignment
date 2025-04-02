//1
//  Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string (case-insensitive).
//=========================
// function countVowels(str) {
//     let vowels = ["a", "e", "i", "o", "u"];
//     let count = 0;

//     str = str.toLowerCase(); // Convert to lowercase to make it case-insensitive

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }

//     return count;
// }

// // Example usage:
// console.log(countVowels("JavaScript")); // Output: 3
// console.log(countVowels("Sara")); // Output: 2
//===================================================================================================================
//2
// Check Even or Odd Numbers in an Array
// Write a function that takes an array of numbers and prints "even" if the number is even, or "odd" if the number is odd.

// Example:
// Input: [1, 4, 7, 10]
// Output:
// odd
// even
// odd
// even
//=========================

// function even_or_odd_arr(arr) {
//     for (let i = 0; i < arr.length; i++) {  // Fix the loop condition
//         if (arr[i] % 2 === 0) {
//             console.log("Even");
//         } else {
//             console.log("Odd");
//         }
//     }
// }

// // Example usage:
// even_or_odd_arr([8, 7, 8, 5, 4]);

//===================================================================================================================
//3
// Find Longest Word in a String
// Write a function that takes a sentence and returns the longest word in it.

// Example:
// Input: "I love JavaScript programming"
// Output: "programming"
//=========================

// function findLongestWord(sentence) {
//     let wordsArr = sentence.split(" "); // Split the sentence into an array of words
//     let longestWord = ""; // Variable to store the longest word

//     for (let i = 0; i < wordsArr.length; i++) {
//         if (wordsArr[i].length > longestWord.length) {
//             longestWord = wordsArr[i]; // Update the longest word
//         }
//     }

//     return longestWord;
// }

// // Example usage:
// console.log(findLongestWord("I love JavaScript programming")); // Output: "JavaScript"


//===================================================================================================================
//4
// FizzBuzz Problem
// Print numbers from 1 to 50. For multiples of 3, print "Fizz", for multiples of 5, print "Buzz", and for multiples of both, print "FizzBuzz".
//=========================

// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz"); // If divisible by both 3 and 5
//     } else if (i % 3 === 0) {
//         console.log("Fizz"); // If divisible by 3 only
//     } else if (i % 5 === 0) {
//         console.log("Buzz"); // If divisible by 5 only
//     } else {
//         console.log(i); // Otherwise, print the number
//     }
// }

//===================================================================================================================
//5
// Find the Second Largest Number in an Array
// Write a function to find the second largest number in a given numeric array.

// Example:
// Input: [10, 5, 20, 8, 12]
// Output: 12
//=========================
// using sort
// let a = [1, 5, 9, 6, 3, 87, 72, 23];

// function largest(array) {
//     array.sort((a, b) => a - b); 
//     return array[array.length - 2]; 
// }

// console.log(largest(a)); 

//=========================
// without using sort(gbt)
// function findSecondLargest(array) {
//     if (array.length < 2) {
//         return "Array must have at least two numbers.";
//     }

//     let largest = -Infinity;
//     let secondLargest = -Infinity;

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > largest) {
//             secondLargest = largest;
//             largest = array[i];
//         } else if (array[i] > secondLargest && array[i] !== largest) {
//             secondLargest = array[i];
//         }
//     }

//     return secondLargest;
// }

// // Example usage:
// let a = [1, 5, 9, 6, 3, 87, 72, 23];
// console.log(findSecondLargest(a)); // Output: 72

//===================================================================================================================
//6
// Flatten a Nested Array
// Write a function that flattens an array with nested arrays into a single-level array.

// Example:
// Input: [1, [2, [3, 4], 5], 6]
// Output: [1, 2, 3, 4, 5, 6]
//=========================
// (gbt)

// function flattenArray(arr) {
//     let result = [];

//     // Loop through the outer array
//     for (let i = 0; i < arr.length; i++) {
//         // If the current element is an array
//         if (typeof arr[i] === 'object' && arr[i] !== null) {
//             // Loop through the nested array
//             for (let j = 0; j < arr[i].length; j++) {
//                 // If the nested element is an array, recurse
//                 if (typeof arr[i][j] === 'object' && arr[i][j] !== null) {
//                     result = result.concat(flattenArray(arr[i][j]));
//                 } else {
//                     // Otherwise, push the number into the result array
//                     result.push(arr[i][j]);
//                 }
//             }
//         } else {
//             // If it's not an array, push it to the result
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// // Example usage:
// let nestedArray = [1, [2, [3, 4], 5], 6];
// console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]















//=========================
// (me)


// let arr = [];

// function flattenArray(){
//     let result = [];
//     for (let i = 0; i < arr.length; i++){
//         if (typeof arr[i] === )
//     }
// }
























