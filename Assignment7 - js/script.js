// parse
// for(let i=1; i<=3;i++){
//     for(let j=1;j<=3;j++){
//         console.log(`(${i},${j})`);
//     }
// }

// (1,1)
// (1,2)
// (1,3)
//
// (2,1)
// (2,2)
// (2,3)
//
// (3,1)
// (3,2)
// (3,3)

//=============================================================================================================================

//let arr = [[1,3],2,3]; // in js we can but different data types in the same array but its not good practice

//=============================================================================================================================

// let arr=[
//     2,
//     3,
//     {
//     name:"sara",
//     age:18,
// },
//     ['test',{phone:'9859850', salary:222222}, 10]
// ];

// console.log(arr[2].age);
// console.log("=============================================================================================================")
// console.log(arr[3][0].slice(2,3))
// console.log("=============================================================================================================")
// console.log(arr[3][1].salary/2);
// console.log("=============================================================================================================")
// console.log(arr[3][2] * 10);

//=============================================================================================================================

// let arr = [
//     {id:1, value:'exam'},
//     {id:1, value:'test'},
//     {id:1, value:'assignment'},
// ];

// console.log(arr);
// // الكود المصحح
// function findExam() {
//     let i = 0;
//     while (i < arr.length) {
//         if (arr[i].value === "exam") {
//             console.log(arr[i]); // طباعة العنصر إذا كان value === "exam"
//             return; // إنهاء البحث عند العثور على العنصر
//         }
//         i++;
//     }
// }
// //console.log(findExam(arr));
// findExam();
//=============================================================================================================================

// let arr = [1, 2, 3];
// let arr1 = [4, 5, 6];

// console.log(arr);
// arr.push(4) //array بتضيف اخر ال
// console.log(arr);
// arr.unshift(0) //array بتضيف اول ال
// console.log(arr);

// arr.pop() // بتحذف اخر عنصر
// console.log(arr);

// arr.shift(); // بتحذف اول عنصر
// console.log(arr);

// console.log(arr);
// console.log(arr1);
// arr.concat(arr1); //جديدة array بترجعلي
// console.log(arr);
// console.log(arr1);

// let result = arr.concat(arr1);
// console.log(result);

// console.log(arr);

//Done
//=============================================================================================================================
// let arr = [1, 2, 3];
// let arr1 = [4, 5, 6];

// let result = arr.join(','); //وبتفصل بينهم بفراغ str الى arr بحول ال

// console.log(result);

// let result = arr.slice(1,4);
// console.log(arr);
// console.log(result);

// let arr2=[1, 2, 3, 4];

// arr2.splice(1, 3, 100,90,70);
// console.log(arr2);

//=============================================================================================================================

// let arr2 = [1, 2, 3, 'a'];

// console.log(arr2.indexOf('a')); //3

// console.log(arr2.includes(2)); // true

// arr2.reverse()
// console.log(arr2);
// arr2.sort()
// console.log(arr2);

//===========================================

// let arr2 = [1, 2, 3, 5, 1,0, 9];

// arr2.sort() // it sorts them as strings not numbers and it looks correct just because they are single numbers
// console.log(arr2);

// If a - b is negative, a comes first.
// If a - b is positive, b comes first.
// If a - b is 0, their order remains unchanged.

// arr2.sort((a,b)=> a-b) // ensures that numbers are sorted numerically
// console.log(arr2);

// let arr3 = ['a', 'c', 'd', 'ba']

// arr3.sort()
// console.log(arr2);

//===========================================

// let double = arr2.map((x)=> x*2);
// console.log(double);

//=============================================================================================================================

// let arr2 = [1, 2, 3];

// let filter = arr2.filter((x)=> x > 1);

// console.log(arr2);
//  console.log(filter);

//=============================================================================================================================
//The .reduce() method reduces the array to a single value by applying a function iteratively.
// let arr5 = [1,2,3];

// let reduce = arr5.reduce((pre,curr) => pre+curr )// ارجع مجموع الارقام // pre (1) and curr (2)
// console.log(reduce);//6 => 1+2=3 => 3+3=6

// let product = arr5.reduce((pre, curr) => pre * curr);
// console.log(product); //6

//==========================

// let arr6 = [1,2,3];
// let reduce1 = arr6.reduce((pre,curr) => pre+curr,1 )//add intial value form where he gonna start and add

// console.log(reduce1);//7

//==========================

//method like loop
// اول
// ما فهمت فايدة هاد المثال
// let index=0;

// let arr7=[1,2,3];

// arr7.forEach((x,y)=> {// بترجع ال index of array
//     console.log(x);
//     if(2 === x){
//          index=y
//     }
// });
//notes:
// x → The current element (value of the array).
// y → The current index of the element.

//example to for each:
// let arr = [10, 5, 8, 20];
// let foundIndex = -1; // default value in case 5 is not found.

// arr.forEach((value, index) => {
//     if (value === 5) {
//         foundIndex = index;
//     }
// });

// console.log(foundIndex); // 1

//we stopped here
// //=============================================================================================================================
//find method
// let arr2 = [1, 2, 3];

// let found = arr2.find((x) => x>1); //برجع اول عنصر بتحقق عندو الشرط
// console.log(found); //2

// let found = arr2.findIndex((x) => x>1); //برجع الاندكس لاول عنصر بتحقق عندو الشرط
// console.log(found); //1

//============================

// let arr2 = [1, 2, 4 ];

// console.log(arr2.every((x) => x % 2 === 0)); // &&

// console.log(arr2.some((x) => x % 3 ===0)); // ||

// let arr3 =[1, [2,3], [4, [5]]];
// let result = arr3.flat(1);
//  console.log(result);
// another way :
//  let result = arr3.flat(Infinity); // If you don't know the depth, use .flat(Infinity)
// console.log(result); // [1, 2, 3, 4, 5]

//=============================================================================================================================

// let arr3 =[1,2,3]; // i want it to be like this : [1,2, 2,4, 3,6];

// let result = arr3.flatMap((x) => [x, x*2]);
//  console.log(result);

//  let result = arr3.map((x) => [x, x*2]).flat(); // في اشي غلط
//  console.log(result);

//========================================

// let arr3 =[1,2,3]; // i want it to be like this : [1,2, 2,4, 3,6];

// arr3.fill(0,0,2)//نفسها arrبتغير عال
// console.log(arr3);
// notes :
// 0 → The value to fill the array with.
// 0 → The starting index (inclusive).
// 1 → The ending index (exclusive, does not change this index).

//========================================

// let arr3 =[1,2,3,4,5]; //i want it to be like this : [1,3, 2,6, 3,9, 4,12, 5,15];

// let result = arr3.map((x) =>  x*3);
// console.log(result);

//====================================================================================
// .filter() loops through each element of the array.
// It keeps only the elements for which the callback function returns true.

// let arr4 = [1, 2, 2, 3, 3, 4, 5]; // i want it to be like this :  [1,2,3,4,5] using(filter + indexof)

// let result = arr4.filter((value, index, array) => {
//   return array.indexOf(value) === index; // array.indexOf(value) returns the first occurrence index of value in the array.
// });

// console.log(result); // Output: [1, 2, 3, 4, 5]
//note :
// If indexOf(value) === index, it means this is the first time the value appears, so we keep it.
//=================================

//sort by age

// let arr = [
// {name: "Hussam", age: 38},
// {name: "Ali", age: 40},
// {name: "Ahmad", age: 22},
// ];

// arr.sort((a, b) => a.age - b.age);
// console.log(arr);

//notes :
// a - b = - ===> a then b (b is bigger) 
// a - b = + ===> b then a (a is bigger) 
// a - b = 0 ===> nothing changes 

// 38 - 40 = -2 (a first)
// 38 - 22 = 16 (b first)
// 40 - 22 = 18 (b first) already














