//1
//  Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string (case-insensitive).
//=========================
//1 My Solution
// function countVowels(str){
// let count = 0;
// let vowelArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

// for (i=0; i<str.length; i++){
// if (vowelArr.includes(str[i])){
//     ++count;
// }
// }
// return count;
// }
// console.log(countVowels("JavaScript")); // Output: 3
// console.log(countVowels("Sara")); // Output: 2
//=========================
//2 Chatgbt
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
// console.log(countVowels("JavaScript")); // Output: 3
// console.log(countVowels("Sara")); // Output: 2

//==============================================================================================================================================
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
//1 My Solution
// function even_or_odd_arr(arr){
// for(i=0;i<arr.length;i++){
// if (arr[i] % 2 === 0){
//     console.log("even");
// }else if (arr[i] % 2 !== 0){
//     console.log("odd");
// }
// }
// }
// console.log(even_or_odd_arr([1, 4, 7, 10]));

//=========================
//2 best solution acording to Chatgbt (i wrote it)
// function even_or_odd_arr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i] % 2 === 0 ? "even" : "odd");
//     }
// }
// // Example usage:
// even_or_odd_arr([1, 4, 7, 10]);

//===================================================================================================================
//3
// Find Longest Word in a String
// Write a function that takes a sentence and returns the longest word in it.

// Example:
// Input: "I love JavaScript programming"
// Output: "programming"
//=========================
//1 My Solution

// function longestWord(str){
// let strArr = str.split(" ");
// let longestWord = "";
// for(let i=0; i<strArr.length;i++){
// if (strArr[i].length > longestWord.length){
//     longestWord = strArr[i];
// }
// }
// return longestWord;
// }
// console.log(longestWord("I love JavaScript programming")); // Output: "programming"

//=========================
//2 chatgbt (best solution)

// function longestWord(str) {
//     return str.split(" ").reduce((longest, current) => {
//         return current.length > longest.length ? current : longest;
//     }, "");
// }
// console.log(longestWord("I love JavaScript programming")); // Output: "programming"

//===================================================================================================================
//4
// FizzBuzz Problem
// Print numbers from 1 to 50. For multiples of 3, print "Fizz", for multiples of 5, print "Buzz", and for multiples of both, print "FizzBuzz".
//=========================
//1 My Solution

// function FizzBuzz() {
//   for (let i = 1; i <= 50; i++)
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     }else if (i % 5 === 0){
//         console.log("Buzz"); 
//     }else{
//         console.log(i);
//     }
// }
// FizzBuzz();

//=========================
//2 chatgbt (best solution)
// function FizzBuzz() {
//     for (let i = 1; i <= 50; i++) {
//       let result = '';
      
//       if (i % 3 === 0) result += 'Fizz';  // Add "Fizz" if divisible by 3
//       if (i % 5 === 0) result += 'Buzz';  // Add "Buzz" if divisible by 5
  
//       console.log(result || i);  // If result is empty, print the number itself
//     }
//   }
  
//   FizzBuzz();
  
//===================================================================================================================
//5
// Find the Second Largest Number in an Array
// Write a function to find the second largest number in a given numeric array.

// Example:
// Input: [10, 5, 20, 8, 12]
// Output: 12
//=========================
// chatgbt (without sort)

// function secondLargest(arr) {
//     if (arr.length < 2) {
//         return "Array must have at least two elements";
//     }

//     let largest = -Infinity;  // Initialize to negative infinity
//     let secondLargest = -Infinity;  // Initialize to negative infinity

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             secondLargest = largest;  // Update second largest
//             largest = arr[i];  // Update largest
//         } else if (arr[i] > secondLargest && arr[i] !== largest) {
//             secondLargest = arr[i];  // Update second largest if condition matches
//         }
//     }

//     return secondLargest;
// }

// console.log(secondLargest([10, 5, 20, 8, 12]));  // Output: 12

//=========================
// chatgbt (with sort)
// using sort
// let a = [1, 5, 9, 6, 3, 87, 72, 23];

// function largest(array) {
//     array.sort((a, b) => a - b);
//     return array[array.length - 2];
// }

// console.log(largest(a));

//===================================================================================================================
//6
// Flatten a Nested Array
// Write a function that flattens an array with nested arrays into a single-level array.

// Example:
// Input: [1, [2, [3, 4], 5], 6]
// Output: [1, 2, 3, 4, 5, 6]
//=========================
//1 My Solution (using hints)

// function flattenArray(arr){
//     let flatArr =[];
// for(let i=0;i<arr.length;i++){
//     if(Array.isArray(arr[i])){
//         flatArr = flatArr.concat(flattenArray(arr[i])); //from chat
//     }else{
//     flatArr.push(arr[i]);
//     }
// }
// return flatArr;
// }
// console.log(flattenArray([1, [2, [3, 4], 5], 6]));

//=========================
//2 chat gbt

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
