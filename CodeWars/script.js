//1 Student's Final Grade
// My Solution

// function finalGrade(exam, projects) {
//     if (exam > 90 || projects > 10) {
//       return 100;
//     } else if (exam > 75 && projects >= 5) { // Fix: Use && instead of ||
//       return 90;
//     } else if (exam > 50 && projects >= 2) { // Fix: Use && and return 75
//       return 75;
//     } else {
//       return 0;
//     }
//   }

//   console.log(finalGrade(100, 12)); // 100
//   console.log(finalGrade(99, 0));   // 100
//   console.log(finalGrade(10, 15));  // 100
//   console.log(finalGrade(85, 5));   // 90
//   console.log(finalGrade(55, 3));   // 75
//   console.log(finalGrade(55, 0));   // 0
//   console.log(finalGrade(20, 2));   // 0

//===========================================
// Better Solution (Chat Gbt)

// function finalGrade(exam, projects) {
//   return exam > 90 || projects > 10
//     ? 100
//     : exam > 75 && projects >= 5
//     ? 90
//     : exam > 50 && projects >= 2
//     ? 75
//     : 0;
// }

// console.log(finalGrade(100, 12)); // 100
// console.log(finalGrade(99, 0)); // 100
// console.log(finalGrade(10, 15)); // 100
// console.log(finalGrade(85, 5)); // 90
// console.log(finalGrade(55, 3)); // 75
// console.log(finalGrade(55, 0)); // 0
// console.log(finalGrade(20, 2)); // 0

//==============================================================================================================================================
//2 Replace all vowel to exclamation mark in the sentence
// //1 My Solution (تخبيصي ما الو داعي بس حتى اراقب تقدمي) 

// // function replace(str) {
// //   let strArr = str.split("");
// //   vowelArr = ["a","e","i","o","u","A","E","I","O","U"];
// //   if(strArr.some(char => vowelArr.includes(char))=== true){
// //   }
// // }
// // console.log(replace("sara")); //s!r!

//===========================================
// //1 My Solution(with some help)
// function replace(str) {
//     let strArr = str.split(""); // Convert string to array
//     let vowelArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    
//     for (let i = 0; i < strArr.length; i++) {
//         if (vowelArr.includes(strArr[i])) {
//             strArr[i] = "!"; // Replace vowel with "!"
//         }
//     }
    
//     return strArr.join(""); // Convert array back to a string
// }

// console.log(replace("sara")); // "s!r!"
// console.log(replace("hello")); // "h!ll!"
// console.log(replace("xyz")); // "xyz" (no changes)

//===========================================
//2 chatgbt (Best Solution )

// function replace(str) {
//     let vowelArr = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

//     return str
//         .split("")
//         .map(char => (vowelArr.has(char) ? "!" : char))
//         .join("");
// }

// //2 
// // function replace(s) {
// //     return s.replace(/[aeiou]/ig, '!');  
// //   }
  

// console.log(replace("sara"));  // "s!r!"
// console.log(replace("hello")); // "h!ll!"
// console.log(replace("xyz"));   // "xyz" (no changes)







