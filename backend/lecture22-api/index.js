// sunday lecture 4/5/2025 (part 2 promises) from fatima

// 3 satus in promise
//  pending: initial state, neither fulfilled nor rejected.
//  fulfilled: meaning that the operation was completed successfully.
//  rejected: meaning that the operation failed.

//for example if the delete still working that's me the satus for this is pending
//when is done that's mean the satus is fulfilled

//how to deal with the promise
//set time out (تنفيذ اي عملية مثلا بعد 3 ثواني )

//make this function Promise function
//and handal the async func
//  function fetchData(){
//     //set time out done function after a period of time 1s => 1000  it's  ms
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//      const value = Math.floor(Math.random() * 11);
//             if(value > 5 )
//     resolve(value);

// else reject(value);
//         },2000);
//     });

// }

// //resolve void functiona and reject is void function or methode
// //But they are "void functions", meaning they don’t return a value that you need to use
// //  You just call them — they trigger the next step in the Promise chain.

// //we must use (then) then have value it's the value that  (ترجعلي من resolve)
// //the value use for promise
// //القيمة يلي ترجع من البرميس
// // fetchData().then((value) => {
// //     console.log(value);
// // },(error) => {
// //     console.log(error);
// // });

// //the best way to deal with rejected value use the chain
// fetchData().then((value) => {
//         console.log(value);
//     } ).catch((error) => {}); // if there is any worng or problem return the value with catch

//im using async function but wait for async fun done to done my work
//use async await

async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = Math.floor(Math.random() * 11);
      if (value > 5) resolve(value);
      else reject(value);
    }, 2000);
  });
}
//the two function must be the same async func just
//كيف رح يشتغل ؟
//first thing( after promis) then the callTheFetchApi
async function callTheFetchApi() {
  const respones = await fetchData();
}

callTheFetchApi();

console.log("after promise");
// control the things that show after the async function is this methode ( موجودين نفس المكان)
// some times we need to wait data to show then do the function like get posts
//بستنى الداتا تيجي بعدين ببعت ال داتا داخل ال (asynch function)

//async await
//the promise handel the async func
//async await the main idea
//line async wait until you done all the work then conti the lines
