//1-Even or Odd (first challenge)
//1
// function even_or_odd(x){
// if(x%2 === 0){
//     return "Even";
// }else{
//     return "Odd";
// }
// }
// console.log(even_or_odd(5));
//2
// function even_or_odd(x){
// return x % 2 === 0 ? "Even" : "Odd";
// }
// console.log(even_or_odd(2));
//=======================================================================================================================================================================================
//2-sum of positive
//1
// function sumPositive(myArray) {
//   let sum = 0;
//   for (i = 0; i <= myArray.length; i++) {
//     if (myArray[i] > 0) {
//       sum += myArray[i];
//     }
//   }
//   return sum;
// }
// console.log(sumPositive([1, -2, 5, 7, 1, -20, 6]));
//2
// function sumPositive(myArray) {
// return myArray.filter((x) => x > 0)
// .reduce((acc,current) => acc + current ,0);//يعني ال0 initial value هو الرقم اللي رح ابدا منو واللي هو نفسو
// }
// console.log(sumPositive([1, -2, 5, -20, 5]));
//=======================================================================================================================================================================================
// وقفت هون بدي احلها تحت بدون ما ارجع اتطلع ع هاد الحل اللي مش مكمل
//3-sum without highest and lowest number
//1
// function sumArray(myArray){
//   // let x = myArray.length;
// for(i=0; i <= myArray.length; i++){
// for(y)

//     // if(myArray[i]>){
//     //     myArray = myArray.delete(myArray[i]);
//     // }
// }
// }
// console.log(sumArray([2,4,2,5,9]));//11
//=======================================================================================================================================================================================
//3-sum without highest and lowest number
//1 الحل تبعي

// let arr = [2,4,2,5,9];

// arr.sort((a, b) => a - b);

// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

//  let reduce = arr.reduce((pre,curr) => pre+curr )
//  console.log(reduce);//11
//======================================
//2 chatgbt
// function sumArray(arr) {
//   if (!arr || arr.length <= 2) { // Handle empty, null, or too short arrays
//     return 0;
//   } else {
//     arr = arr.sort((a, b) => a - b);
//     arr.pop();
//     arr.shift();
//     arr = arr.reduce((pre, curr) => pre + curr);
//     return arr;
//   }
// }
// console.log(sumArray([1, 7, 9, 15, 4, 4])); //24
//notes :
// ✅ Use arr === null if you specifically check for null.
// ✅ Use arr === undefined if you specifically check for undefined.
// ✅ Use arr == null when you want to check both null and undefined.

//3 بطريقة اسهل built in function الحل تبع اليوتيوب ب

// function sumWithoutTheHeighestAndLowestNumber(array) {
//   if (array == null) return 0;
//   return array
//     .sort((a, b) => a - b)
//     .slice(1, -1)
//     .reduce((acc, current) => acc + current, 0);
// }

// console.log(sumWithoutTheHeighestAndLowestNumber([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9]));

//=======================================================================================================================================================================================
// 30/3/2025
//4-string repeat
//1 الحل تبعي

// function repeatStr(n , s){
// return s.repeat(n);
// }
// console.log(repeatStr(0 ,"s"));
// console.log(repeatStr(2 ,"sara"));

//======================================
//2 (بدون استخدام repeat) الحل تبعي

// function repeatStr(n,s) {
//     let result = "";
//     for(let i = 0; i < n; i++){
//         result += s;
//     }
//     return result;
// }
// console.log(repeatStr(7,"s"));
// console.log(repeatStr(2,"sara"));

// الحلين اللي فوق نفسهم اللي بفيديو اليوتيوب

//=======================================================================================================================================================================================
//5-convert number to reversed array
//1 الحل تبعي

// function digitize(number) {
//   let arr = [];
//   let stnumber = number.toString();

//   for (let i = 0; i <stnumber.length; i++) {
//     arr.push(stnumber[i]);
//   }
//   let nmrArr = arr.map(Number);
//   return nmrArr.reverse();
// }
// console.log(digitize(763018));
//======================================
//2 الحل تبعي
// function digitize(number) {
//     let arr = [];
//     let stnumber = number.toString();

//     for (let i = stnumber.length-1 ; i >= 0 ; i--) {
//       arr.push(stnumber[i]);
//     }
//     let nmrArr = arr.map(Number);
//     return nmrArr;
//   }
//   console.log(digitize(763018));
//======================================
//3 chatgbt
// function digitize(number) {
//     return  number.toString().split("").map(Number).reverse();
//   }
//   console.log(digitize(763018));

//=======================================================================================================================================================================================
//5-counting sheep
//1 الحل تبعي
// function countSheeps(arrayOfSheep) {
//   let counter = 0;
// for(i=0;i < arrayOfSheep.length;i++){
//   if (arrayOfSheep[i]=== true){
//     counter++;
//   }
// }
//   return counter;
// }
// console.log(countSheeps([true, true, false, true, false, true, true]));
//======================================
//2 chatgbt

// function countSheeps(arrayOfSheep) {
//     return arrayOfSheep.filter(x => x === true).length;
//   }
//   console.log(countSheeps([true, true, false, true, false, true, true]));

//======================================
//3 chatgbt
//The .filter(Boolean) will remove any falsy values (i.e., false, null, undefined, 0, "").

// function countSheeps(arrayOfSheep) {
//     return arrayOfSheep.filter(Boolean).length;
// }
// console.log(countSheeps([true, true, false, true, false, true, true]));

//======================================
//3 youtube

// function countSheeps(arrayOfSheep) {
// let counter = 0;
// arrayOfSheep.map((m) => {
//     if (m === true) counter++;
// })
// return counter;
// }
// console.log(countSheeps([true, true, false, true, false, true, true]));

// what is the best solution ?
// For clarity and efficiency: Solution #2 is the best because it’s clean and easy to understand.
// For maximum performance (when working with larger arrays): Solution #3 is more memory-efficient because it doesn’t create an unnecessary array.

//=======================================================================================================================================================================================
//7- Get opposite
//1 الحل تبعي

// function getOpposite(num){
// return num*-1;
// }
// console.log(getOpposite(7));

//======================================
//2 youtube

// function getOpposite(num){
//     return -num;
//     }
//     console.log(getOpposite(7));

//=======================================================================================================================================================================================
//8- Returning negative
//1 الحل تبعي
// function makeNegative(num){
// if (num > 0){
//     return -num;
// }else{
//     return num;
// }
// }
// console.log(makeNegative(-8));

//======================================
//2 youtube

// function makeNegative(num){
// return num > 0? -num : num;
// }
// console.log(makeNegative(-6));

//======================================
//2 chatgbt (Best solution)

// function makeNegative(num) {
//     return num < 0 ? num : -num;
//   }
//   console.log(makeNegative(-6));

//=======================================================================================================================================================================================
//9- Jenny's secret
//2 my solution
// function greet(name){
//     if (name === "Johny"){
//         return "Hello, my love!";
//     }
//     return "Hello, " + name + "!";
// }
// console.log(greet("Johny"));

//======================================
//2 youtube

// function greet(name){
//   return name !== "Johny" ? "Hello, " + name + "!" : "Hello, my love!";
// }
// console.log(greet("Johny"));
//=======================================================================================================================================================================================
//10- A Needle In The HayStack
//1 my solution

// function findNeedle(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === 'needle') {
//         return `found the needle at position ${i}`; // + i
//       }
//     }
//     return "needle not found";
//   }
//   console.log(findNeedle(["hay", "junk", "needle", "more junk"]));

//======================================
//2 my solution (used a hint)

//   function findNeedle(arr) {
//    return `found the needle at position ` + arr.indexOf("needle");
//   }
//   console.log(findNeedle(["hay", "junk", "needle", "more junk"]));

//======================================
//3 chatgbt
//   function findNeedle(arr) {
//     let index = arr.indexOf("needle");
//     return index !== -1 ? `found the needle at position ${index}` : "needle not found";
//   }
//   console.log(findNeedle(["hay", "junk", "more junk"])); // needle not found

//=======================================================================================================================================================================================
// 11- Count-of-positives-sum-of-negatives

//1 my solution

// function Count_Pos_Neg(arr){
// if (!arr || arr.length === 0){
//     return [];
// }else{
// resultArr=[];

// let posArr= arr.filter(num => num > 0);
// let first =  posArr.length;
// resultArr.push(first);

// let negArr = arr.filter(num => num < 0);
// let second = negArr.reduce((acc, num) => acc + num, 0);
// resultArr.push(second);

// return resultArr;
// }
// }
// console.log(Count_Pos_Neg([1, -2, 3, -4, 5]));  // Output: [3, -6]
// console.log(Count_Pos_Neg([]));                 // Output: []
// console.log(Count_Pos_Neg(null));               // Output: []

//======================================
//2 chatgbt

// function Count_Pos_Neg(arr){
// if (!arr || arr.length === 0){
//     return [];
// }else{
// resultArr=[];

// let first = arr.filter(num => num > 0).length;
// let second = arr.filter(num => num < 0).reduce((acc, num) => acc + num, 0);

// return resultArr=[first,second];
// }
// }
// console.log(Count_Pos_Neg([1, -2, 3, -4, 5]));  // Output: [3, -6]
// console.log(Count_Pos_Neg([]));                 // Output: []
// console.log(Count_Pos_Neg(null));               // Output: []

//======================================
//3 chatgbt (best solution)

// function Count_Pos_Neg(arr) {
//     if (!arr || arr.length === 0) {
//       return []; // Return empty array if input is null or empty
//     }

//     let posCount = 0;
//     let negSum = 0;

//     for (let num of arr) {
//       if (num > 0) {
//         posCount++;
//       } else if (num < 0) {
//         negSum += num;
//       }
//     }

//     return [posCount, negSum];
//   }

//   console.log(Count_Pos_Neg([1, -2, 3, -4, 5]));  // Output: [3, -6]
//   console.log(Count_Pos_Neg([]));                 // Output: []
//   console.log(Count_Pos_Neg(null));               // Output: []

//=======================================================================================================================================================================================
// 12- Double Char
//1 my solution

// function doubleChar(str){
//     let result="";
//     for(i=0; i< str.length; i++){
//     let  repeatedStr = str[i].repeat(2);
//     result += repeatedStr;
//     }
//     return result;
// }
// console.log(doubleChar("Karla"));

//======================================
//2 chatgbt (best solution)

// function doubleChar(str) {
//     return str.split("").map(char => char.repeat(2)).join("");
//   }
//   console.log(doubleChar("Karla"));

//=======================================================================================================================================================================================
// 13- Basic Mathematical Operations

//1 my solution

// function basicOp(op, v1, v2) {
//   if (op === "+") {
//     return v1 + v2;
//   } else if (op === "-") {
//     return v1 - v2;
//   } else if (op === "*") {
//     return v1 * v2;
//   } else if (op === "/") {
//     return v1 / v2;
//   } else {
//     return "Invalid operator";
//   }
// }

// console.log(basicOp("+", 3, 4)); // Output: 7
// console.log(basicOp("-", 10, 5)); // Output: 5
// console.log(basicOp("*", 2, 6)); // Output: 12
// console.log(basicOp("/", 8, 2)); // Output: 4
// console.log(basicOp("%", 10, 2)); // Output: "Invalid operator"

//======================================
//2 my solution

// function basicOp(op, v1, v2) {
//     switch (op) {
//       case "+":
//         return v1 + v2;
//       case "-":
//         return v1 - v2;
//       case "*":
//         return v1 * v2;
//       case "/":
//         return v1 / v2;
//       default:
//         return "Invalid operator";
//     }
//   }

//   // Example Usage
//   console.log(basicOp("+", 3, 4)); // Output: 7
//   console.log(basicOp("-", 10, 5)); // Output: 5
//   console.log(basicOp("*", 2, 6)); // Output: 12
//   console.log(basicOp("/", 8, 2)); // Output: 4
//   console.log(basicOp("%", 10, 2)); // Output: "Invalid operator"

//======================================
//3 youtube

// function basicOp(op, v1, v2) {
// //   if (op == "+") return v1 + v2;
// //   if (op == "-") return v1 - v2;
// //   if (op == "*") return v1 * v2;
// //   if (op == "/") return v1 / v2;

//   return eval(v1 + op + v2);
//   }

//   // Example Usage
//   console.log(basicOp("+", 3, 4)); // Output: 7
//   console.log(basicOp("-", 10, 5)); // Output: 5
//   console.log(basicOp("*", 2, 6)); // Output: 12
//   console.log(basicOp("/", 8, 2)); // Output: 4
//   console.log(basicOp("%", 10, 2)); // Output: "Invalid operator"

//=======================================================================================================================================================================================
// 14- To Square Root Or Not To Square Root

//1 my solution

// function squareOr(arr){
//     resultArr=[];
//     if (arr === null){
//         return null;
//     }else{
//         for(let i=0; i<arr.length;i++){
// if (Number.isInteger(Math.sqrt(arr[i])) === true){
//     resultArr.push(Math.sqrt(arr[i]));
// }else if (Number.isInteger(Math.sqrt(arr[i])) === false){
//     resultArr.push(arr[i]*arr[i]);
//         }
//     }
//     return resultArr;
//     }
// }
// console.log(squareOr([4,3,9,7,2,1])); // [2,9,3,49,4,1]

//======================================
// my solution(after improving)

// function squareOr(arr) {
//     let resultArr = [];
//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (Number.isInteger(Math.sqrt(arr[i]))) {
//             resultArr.push(Math.sqrt(arr[i]));
//         } else {
//             resultArr.push(arr[i] * arr[i]);
//         }
//     }
//     return resultArr;
// }

// console.log(squareOr([4, 3, 9, 7, 2, 1])); // Output: [2, 9, 3, 49, 4, 1]

//======================================
// chatgbt

// function squareOr(arr) {
//     if (!Array.isArray(arr)) return null;

//     return arr.map(num =>
//         Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num * num
//     );
// }

// console.log(squareOr([4, 3, 9, 7, 2, 1])); // Output: [2, 9, 3, 49, 4, 1]

//=======================================================================================================================================================================================
// 15- Count By X

//1 my solution

// function countBy(x, n) {
//   resultArr = [];
//   for (let i = 1; i <= n; i++) {
//     resultArr.push(x * i);
//   }
//   return resultArr;
// }
// console.log(countBy(1, 10)); // [1,2,3,4,5,6,7,8,9,10]
// console.log(countBy(2, 5));  // [2, 4, 6, 8, 10]

//======================================
//2 youtube

// function countBy(x, n) {
//     return Array.from(Array(n).keys())
//     .slice(1)
//     .map((num) => num * x);
// }
// console.log(countBy(1, 10)); // [1,2,3,4,5,6,7,8,9,10]
// console.log(countBy(2, 5));  // [2, 4, 6, 8, 10]

//======================================
//3 chatgbt (i didnt look to it )

// function countBy(x, n) {
//     return Array.from({ length: n }, (_, i) => x * (i + 1));
// }
// console.log(countBy(1, 10)); // [1,2,3,4,5,6,7,8,9,10]
// console.log(countBy(2, 5));  // [2, 4, 6, 8, 10]


//=======================================================================================================================================================================================
// 16- Remove String Spaces

//1 my solution

// function noSpaces(str) {
// cleanStr = "";
// for (let i=0; i < str.length; i++){
// if (str[i] !== " "){
//     cleanStr += str[i];
// }
// }
// return cleanStr;
// }
// console.log(noSpaces(" sa r a    ")); 
 

//======================================
//2 youtube

// function noSpaces(x) {

// }
// console.log(noSpaces(x)); 
// console.log(noSpaces(x));  

//======================================
//3 chatgbt 
//1
// function noSpaces(str) {
//     let result = []; // Use an array for efficiency
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== " ") {
//             result.push(str[i]); // Add non-space characters to the array
//         }
//     }
//     return result.join(""); // Convert the array back to a string
// }

// // Test cases
// console.log(noSpaces(" sa r a    ")); // Output: "sara"
// console.log(noSpaces("hello world")); // Output: "helloworld"
// console.log(noSpaces("  a b  c ")); // Output: "abc"

//2
// const noSpaces = str => str.split(" ").join("");

// console.log(noSpaces(" sa r a    ")); // "sara"
// console.log(noSpaces("hello world")); // "helloworld"
// console.log(noSpaces("  a b  c ")); // "abc"


//=======================================================================================================================================================================================
// 15- Count By X

//1 my solution

// function invert(arr){

// if (arr.length === 0){
//     return [];
// }else{
//      return arr.map((num) => num * -1);
//       // return arr.map(num => -num);
//     }
// }
// console.log(invert([1,-2,3,-4,5]));

//=======================================================================================================================================================================================
// 18- Convert boolean values to strings 'Yes' or 'No'
//1 my solution
// function boolToWord(bool){
//     return bool ? "Yes" : "No";
// //  let result = bool === true ? "Yes" : "No";
// //  return result;
// }
// console.log(boolToWord(true)); // Yes
// console.log(boolToWord(false)); // No

//=======================================================================================================================================================================================
// 19- Reversing Words in a String
//1 my solution
// function reverse(str){
// let newArr = str.split(" ");
// let reversedArr = newArr[1] +" "+newArr[0];
// return reversedArr;
// }
// console.log(reverse("Sara Salameh")); // Salameh Sara
//======================================
//2 my solution
// function reverse(str){
//     return str.split(" ").reverse().join(" ").trim();
//     }
//     console.log(reverse("Sara Salameh")); // Salameh Sara
//     console.log(reverse("      Java Script          "));  // Script Java
//======================================
//2 chatgbt 
// function reverse(str) {
//     return str.trim().split(/\s+/).reverse().join(" ");
// }
//     console.log(reverse("Sara Salameh")); // Salameh Sara
//=======================================================================================================================================================================================
// 20- Keep Hydrated
//1 my solution
// function liters(time){
// return Math.floor(time * 0.5);
// }
// console.log(liters(3));
// console.log(liters(6.7));
// console.log(liters(11.8));

//=======================================================================================================================================================================================
// 21- Convert a Number to a String
//1 my solution
// function numToStr(num){
// return num.toString();
// // return `${num}`; 
// }
// console.log(numToStr(123));

//=======================================================================================================================================================================================
// 22- Calculate average
//1 my solution (with some hints)
// function find_average(arr) {
//     if (arr.length === 0) return 0; 
//     const sum = arr.reduce((acc, num) => acc + num, 0);
//     return sum / arr.length; 
// }

// console.log(find_average([3,7,1,9,2])); // 4.4
// console.log(find_average([])); // 0 

//======================================
//2 youtube 

// function find_average(arr) {
//   return arr.length !== 0 ?  arr.reduce((acc, num) => acc + num ,0) / arr.length : 0;
// }

// console.log(find_average([3,7,1,9,2])); // 4.4
// console.log(find_average([])); // 0 

//=======================================================================================================================================================================================
// 23- Convert a String to a Number
//1 my solution 
// var stringToNumber = function (str) {
//     return Number(str);  
// }
// console.log(stringToNumber("1234")); // ✅ 1234
// console.log(stringToNumber("-56")); // ✅ -56
// console.log(stringToNumber("3.14")); // ✅ 3.14

//=======================================================================================================================================================================================
// 24- Count The Monkeys
//1 my solution 

// function countMonkeys(n){
// let arr=[];
// for (let i=1; i<=n ;i++){
// arr.push(i);
// }
// return arr;
// }
// console.log(countMonkeys(10));
// console.log(countMonkeys(1));
// console.log(countMonkeys(5));























