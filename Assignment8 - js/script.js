// functions in js
//====================================================================================================
//1. Function Declarations

// funName(); //هاد النوع بقدر استدعيه فوق قبل الفنكشن

// function funName(p1, p2) {
//   return p1 + p2;
// }
// console.log(funName(5, 3)); // Output: 8
//===============================================
// 2. Function Expressions

// ما بقدر استخدمو قبل تعريفو
// const fun = function (a,b){  // بخزن الفنكشن ب فار
//     return;
// };
// يفضل نستخدم const بحالة الاشياء الثابتة زي اللي فوق
// Example : Greet function 

// const greet = function(myname){
//   return `Hello, ${myname}`;
// }
// console.log(greet("sara"));

//Example: Passing a Function as an Argument

// function executefunction(fn,value){
//   console.log(fn(value));
// }
// executefunction(greet,"othman");
//===============================================
//3. Arrow Functions (ES6)

// اهم تايب للفنكشن
//arrgumant ما عندو فكرة ال
// arrow function (in echma script 6)
// نفس الفنكشن العادي بس كتابتو فيها اختصار
//examples :
// const multiply = (x, y) => x * y;// اول شكل
// const multiply2 = function (x, y) { // تاني شكل
//   return x * y;
// };

// console.log(multiply(10,5));

// const greet = () => { // تالت شكل
//   console.log("Hello!");
//   console.log("Welcome to JavaScript!");
// };
// greet();

//===============================================
//4. Anonymous Functions (فنكشن بدون اسماء )
//Runs Automatically 
//example :
// setTimeout(function(){ //hello بعد ثانيتين بطبعلي
// console.log("Hello after 5 seconds");
// }, 5000);

//===============================================
// 5. Immediately Invoked Function Expressions (IIFE)
//Used when you need to execute a function right away without affecting the global scope.
//call ما بتحتاج cursor بتتنفذ لما يوصلها ال
// example :
// (function(){ console.log('hello')})(); // شكل قديم

//===============================================
// 6. Higher-Order Functions

//بشبه ال callback function
// بعمل return لل callback function
// function fun(a,b, operation){
// return operation(a,b);
// }
// console.log(fun(10, 20, function(a, b) { return a + b }));  // Output: 30
// console.log(fun(10, 20, function(a, b) { return a * b }));  // Output: 200
// console.log(fun(10, 20, function(a, b) { return a - b }));  // Output: -10
// console.log(fun(10, 20, function(a, b) { return a / b }));  // Output: 0.5
//=================================================
// const result = fun1(3,4,(x,y)=> x+y ); // i send function as a parameter
// // اللي  بالصورة
// 📌 Example 1: Passing a Function as an Argument

// function operate(a, b, operation) {
//   return operation(a, b);
// }
// const result = operate(3, 4, (x, y) => x + y);
// console.log(result); // Output: 7

// Example 2: Reusing the Higher-Order Function
// function operate(a, b, operation) {
//   return operation(a, b);
// }
// Different operations
// const add = (x, y) => x + y;
// const multiply = (x, y) => x * y;

// console.log(operate(3, 4, add));      // Output: 7
// console.log(operate(3, 4, multiply)); // Output: 12


//===============================================
//7. Callback Functions
//A callback function is a function passed as an argument to another function.
//فنكشن بنعمللو باس بالبراميتر

// let arr=[];
//  arr.filter((x)=> x >10);

// function fun(callback){
//     const name = "Hussam";

//     array.forEach(element => {
//         callback(element, index, array);
//     });
// }

// شو بفرق هاد عن اللي فوقو

// fun((name)=>{
//     console.log(name)
// })

// example (chatgbt) :
// function processName(callback) {
//   const name = "Hussam";
//   callback(name);
// }

// processName((name) => {
//   console.log("Hello, " + name);
// });

//===============================================
//8. Default Parameters

// initial value for the parameter ? so i didnt recieve an error if the value came to me as null(this is some of the solutions but its rarely used)
// function fun3(name = "test"){ //dont use this way ? its not good at all
//   return name;
// }
// console.log(fun3());

//===============================================
//9. Rest Parameters (...)

// ما بعرف عدد الارقام اللي رح توصلني ف بستخدم هاي الطريقة
// function sum(...numbers){
// return numbers.reduce((a,b)=> a+b ,0);
// }

// console.log(sum(1,4,5,6,3,9,7,8)); //  Output: 43
//
// let arr = [1,5,6,8];
// let arr2 = ["ss", ...arr]  //زي كانه مسك الارقام وحطهم جوا arr2
// console.log(arr2);
// //===============================================

// 10. The arguments Object

// ازا مشعارفين عدد الباراميترز
// function fun3() {
//     console.log(arguments[1]);// Prints second argument
// }

// fun3(1,2,3,4,5,6); // Output: 2

//

// let arr3=[]
// arr3.forEach((value)=> {//for each loop on the array
//     value=10;
// })
// let arr4=["fatima"]
// //x=value
// console.log(arr4.map((x,index) =>{
//     return {Id:index,name:x};
//   })); // ما فهمت الهدف من هاد الكود
// في كود المهندس بصورة برجعلو بعدين
//===============================================
// Challenges ===================================
//===============================================
//11. Finding the Maximum Value in an Array
// algorithms

//arr بدي ارجع اكبر قيمة بهاي ال
// 1
// let arr = [1, 5, 9, 6, 3, 87, 72, 23];
//   let max = Math.max(...arr);
//   console.log(max); // 87

// بدي ياها بطريقة تانية ب لووب2 
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max); // Output: 87

// طريقة 3
// arr.sort((a,b)=>a-b);
// console.log(arr[arr.length-1]); //87
//===============================================
//12. Reversing an Array

//reverse سؤال ال
// let arr = [1, 5, 9];
// let reversedArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) === arr.length - 1) {
//         reversedArr.push(arr[i]); // If it's the last element, add it first
//     } else if (arr.indexOf(arr[i]) === 0) {
//         reversedArr[arr.length - 1] = arr[i]; // If it's the first element, place it at the last index
//     } else {
//         reversedArr[arr.length - 1 - arr.indexOf(arr[i])] = arr[i]; // Place element in reversed order
//     }
// }

// console.log(reversedArr); // [9, 5, 1] // ما اشتغلت صح
//2
// let arr = [1, 5, 9];
// let reversedArr = [];

// for (let i = 0; i < arr.length; i++) {
//     let index = arr.indexOf(arr[i]); // Find the index of the current value
//     reversedArr[arr.length - 1 - index] = arr[i]; // Place it in the reversed position
// }

// console.log(reversedArr); // [9, 5, 1]

//===============================================
// رقمين مجموعهم بطلع 9

// function sum_9_fun(array, target){
// array.sort((a, b) => a - b);

// let left = 0;
// let right = array.length - 1;
// while (left < right){
//   let sum = array[left] + array[right];
//   if (sum === target){
//     return [array[left], array[right]];
//   }else if (sum < target){
//     left++;
//   }else{
//     right--;
//   }
// }
// return null;
// }

// console.log(sum_9_fun([2,8,60,14,6,2,3], 9));



//===============================================


// - Remove duplicates from an array  
// - Find the missing number in a sequence  
// - Count occurrences of elements in an array  

// ✅ Solve More Complex Problems (3-4 hours/day)  
// - Recursion challenges  
// - Dynamic programming basics (Fibonacci sequence, climbing stairs problem)  
// - Problems:  
//   - Find all pairs in an array that sum to a given number  
//   - Generate all possible subsets of an array  
//   - Implement a simple stack or queue in JavaScript  




