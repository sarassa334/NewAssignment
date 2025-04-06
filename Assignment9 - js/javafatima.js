//evne odd


let number=[1,4,7,10];
function check(arr){
    for(let i=0; i< arr.length ; i++){
        if (arr[i] % 2 === 0) {
            console.log(arr[i]+ "  "+"is even ");
        }
        else {
            console.log(arr[i]+"  "+ "is odd ");


        }
        
    }
}
check(number);




//fizzbuzz

function print(){
for(let i=0 ; i<=50 ;i++){
     if( i%3=== 0 && i %5 === 0){
        console.log(i+ "  "+"FizzBuzz ") ; 

     }
     else if (i%5 ===0){
          console.log(i+ "  "+"Buzz ") ; 
         }
    else if(i%3 === 0){
        console.log(i+ "  "+"Fizz ") ; 


    }
     
    }
}
print();




function findLongestWord(str) {
    let strSplit = str.split(' ');
    let longestWord = "";

    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord.length) {
            longestWord = strSplit[i]; 
        }
    }
    return longestWord;
}

console.log(findLongestWord("I love JavaScript programming"));





//
let vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count
}

console.log(countVowel('JavaScript '))

// let ar1 = [1, [2, [3, 4], 5], 6];
function secondLargest(arr7) {
    // Sort the array in descending order using a for loop (Bubble Sort)
    for (let i = 0; i < arr7.length; i++) {
        for (let j = 0; j < arr7.length - i - 1; j++) {
            if (arr7[j] < arr7[j + 1]) {
                // Swap if the current element is smaller than the next element
                let temp = arr7[j];
                arr7[j] = arr7[j + 1];
                arr7[j + 1] = temp;
            }
        }
    }

    // Return the second element (second largest value) after sorting
    return arr7[1];
}

let arr7 = [-10, -5, -20, -8, 12];
console.log(secondLargest(arr7));  



function flattenArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i])); // Recursively flatten
        } else {
            result.push(arr[i]); // Add non-array elements
        }
    }

    return result;
}

let ar1 = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(ar1));  
