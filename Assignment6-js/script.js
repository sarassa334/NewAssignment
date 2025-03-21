 //let v1 = 10;
// let result = 5 + 3 * v1;

// console.log(result);

//  v1++;
//  v1--;
//   console.log(v1);

// ++v1;
// --v1;
// if (v1++ < 11){

// }//true

// if (++v1 < 11){
    
// }//false


//looping 

// for (let x=0; x <= 10; x++){
//     console.log(x);
// }

// for (let x = 10; x >= 0; x--) {
//     console.log(x);
// }

// let array = [1, 2, 3, 4]
// let x=10;
// let y=30;

// let result=0;

//mine=======================================================================================
//====================================================================================================

// let v1=10; // priority ()   *\ left to right +-
// let result =  (5 + 3) * v1;

// //increment  decrement

// v1++;//plus 1
// v1--;//-1
// --v1;
// ++v1;
// if (v1++ < 11){
//   //true نفذ الجملة بعدين زيدها واحد
//   // ++v1< 11 fulase 
// }

// //---------looping for-----------

// console.log("");
// // for(initialization ; condition ; update statment( x++ or ++x it is the same)) use this if i know the end 
// for( let x = 0 ; x <= 10 ; x++ ){
//   console.log(x);
// }
// console.log("-----------------------------------------------------------------");

// // ---------for of-----------------------
// let array= [1,2,3,4]
// // x is the value of index in array
// // there is no condition in for of
// for(let x of array){ //use breake to stop when the condition true
// if(x=== 3){

//   break;
//   //continue;  to go update statment directuly without execute(discard any code under it and go to update statment)
// }
// }
//=======================================================================================
//the difference between break and continue
// break :
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
//     if (i === 3) {
//         break; // Stops the loop when i is 3
//     }
// }
// continue :
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue; // Skips iteration when i is 3
//     }
//     console.log(i);
// }

// console.log("-----------------------------------------------------------------");



// let x =10 ;
// let y=30;

// let result1=1;
// result1 =result1+ x+y; //or
// result1  +=x+y; 

// console.log("-----------------------------------------------------------------");

// ///------while loop------------
// let i = 0;
// while(i<=10){
//     i++;// update statment in the block if it is not there it will happen infinit loop
//     if (i%2!==0){
// continue;
//     }
//   console.log(i);
// }
// console.log("-----------------------------------------------------------------");

// //---do while need to true condition to execute
// let j =0;
// do {
//   console.log(j);
//   j++
// } while (j<=3);


// console.log("-----------------------------------------------------------------");

// //----------for in-----------use with objects to arrive keys

// let obj={
//   name:'',
//   age:10,
//   phoneNum: 79,
// }
// for(let key in obj){
// console.log(key)
// }

// console.log("-----------now------------------------------------------------------");

// let text = "SARa";
// let lowerCase='';

// for(let i=0; i<text.length ; i++){
//   let charCode= text.charCodeAt(i);
//   if(charCode >= 65  && charCode <= 90){
//     lowerCase += String.fromCharCode(charCode+32);
//   }else{
//     lowerCase += text[i];
//   }
// }
// console.log(lowerCase);

// a=1
//A=1+32

// let text1 = "HELLO";

// let target= 'H';
// //ex: seach for certain char in our text
// for(let n = 0; n<text1.length; n++){
//   if(text1[n] === target){
//     console.log(n);
//     break;
//   }
// }

// //---------------------------------------------
// function reverse(text2){

//   let reversed = "";
//   for(let i =text2.length -1;i >= 0; i--){

//     reversed += text2[i];
//   }
//   return reversed.toLowerCase() === text2.toLowerCase();
// }


// console.log(reverse("hello"));//false
// console.log(reverse("toot"));//true
// console.log(reverse("lool"));//true احاا طلعت false

//===================================
// let x = 2;
// for (let i=1; i<=x; i++) {
// x=x*i;
// }
// console.log(x); //infinite loop
//=====================================
// let x = 2;
// let result = 1;

// for (let i = 1; i <= x; i++) {
//   result *= i;  // Multiply i with result
// }

// console.log(result);  // Output: 2 (since 2! = 2 × 1)


//===============================================================================

// let x = 6;
// let result = 1;
// for (let i = 1; i <= x; i++) {
//     result *= i;
// }
// console.log(result); 

//===============================================================================



function factorial(x){
  let result = 1; // Define result inside the function
for (i=1; i<=x; i++){
   result *=i;
}
return result; // Return only after the loop finishes
}

console.log(factorial(5)); // Output: 120
console.log(factorial(3)); // Output: 6
console.log(factorial(0)); // Output: 1 (by definition)































