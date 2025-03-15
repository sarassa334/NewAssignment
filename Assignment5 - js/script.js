// JavaScript String Methods Task
// 1. length - Check if a tweet exceeds 280 characters
let tweet = "iu dhstjrtjykxykyxk";

function checkLength(tweet) {
  if (tweet.length > 280) {
    return "Tweet is too long";
  }
  return "Tweet is valid";
}

// console.log(checkLength(tweet)); //Output: "Tweet is valid"

// // Testing with a long tweet
// let longTweet = "a".repeat(300); // Generates a 300-character string
// console.log(checkLength(longTweet)); // Expected Output: "Tweet is too long"

// =======================================================================================================================================
// 2. charAt() - Ensure a username starts with a capital letter

let userName = "sara7salameh";

function capitalizeUsername(userName) {
  return userName.charAt(0).toUpperCase() + userName.slice(1, userName.length);
}
//  console.log(capitalizeUsername(userName));

// =======================================================================================================================================
// 3. toUpperCase() & toLowerCase() - Format text for consistency in titles
// 3.1
let title = "hello world from javascript";

function formatTitle(title) {
  return title.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}

// console.log(formatTitle(title));

//3.2
let title2 = "hello world from javascript";

function formatTitle(title2) {
  return title2
    .toLowerCase()
    .split(" ") // Split the string into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
    .join(" "); // Join words back into a string
}

// console.log(formatTitle(title2));

// =======================================================================================================================================
// 4. trim() - Remove extra spaces from an email input

let _email = "        sarasalam        eh33@gmail.com  "; //.trim() only removes spaces from the beginning and end of a string
// console.log(_email.trim());

let cleanedEmail = _email.replace(/\s+/g, ""); // Removes all spaces
// console.log(cleanedEmail);

// =======================================================================================================================================
// 5. slice() - Display a short preview of an article
let article =
  "Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String. This chapter describes JavaScript regular expressions. It provides a brief overview of each syntax element. For a detailed explanation of each ones semantics, read the regular";

function readMore(article) {
  return article.slice(0, 51) + " ...Read more";
}

// console.log(readMore(article));

//=======================================================================================================================================
// 6. substring() - Mask all but the last 4 digits of a phone number

let phone = "0786690965";
//6.1
function maskPhone(phone) {
  return phone.replace(phone.length - 3, "*") + phone.slice(phone.length - 3);
}

// console.log(maskPhone(phone))
//6.2
function maskPhone(phone) {
  return phone.replace(phone(0, 6), "*") + phone.slice(phone.length - 3);
}
// console.log(maskPhone(phone));

//6.3
function maskPhone(phone) {
  return "*".repeat(phone.length - 3) + phone.slice(phone.length - 3);
}

// console.log(maskPhone(phone));

//=======================================================================================================================================
// 7. replace() & replaceAll() - Correct spelling mistakes or censor bad words
//7.1
let message = "sara you are badwords ";

function cleanMessage(message) {
  if (message.includes("badwords")) {
    return message.replaceAll("badwords", "*****");
  } else return message;
}

// console.log(cleanMessage(message));

// 7.2 i put the stars as the length of the badword
let message2 = "sara you are badwords ";

function cleanMessage(message2) {
  if (message2.includes("badwords")) {
    return message2.replaceAll("badwords", "*".repeat("badwords".length));
  } else return message2;
}

// console.log(cleanMessage(message2));
//=======================================================================================================================================
// 8. split() - Convert a user’s comment into an array of words

let comment =
  "If the regular expression remains constant, using this can improve performance.";

function toArray(comment) {
  return comment.split(" ");
}
// console.log(toArray(comment));

//=======================================================================================================================================
// 9. includes() - Detect restricted words in comments
//9.1
let comment2 = "using this can improve Performance. using this can .";

function detectWords(comment2) {
  if (comment2.toLowerCase().includes("performance")) {
    return "performance is a restricted word";
  } else {
    return "no restricted words";
  }
}

// console.log(detectWords(comment2));

//9.2 Multiple Restricted Words

let restrictedWords = ["performance", "improve"];

function detectWords(comment2) {
  for (let word of restrictedWords) {
    if (comment2.toLowerCase().includes(word)) {
      return `${word} is a restricted word`;
    }
  }
  return "no restricted words";
}
// console.log(detectWords(comment2));

//=======================================================================================================================================v
// 10. startsWith() & endsWith() - Verify if an uploaded file is an image

let myfile = "planets.gif";

function isImage(myfile) {
  if (
    myfile.endsWith(".jpg") ||
    myfile.endsWith(".png") ||
    myfile.endsWith(".gif") ||
    myfile.endsWith(".webp")
  ) {
    return "this is image";
  } else {
    return "this is not image";
  }
}

// console.log(isImage(myfile));

//=======================================================================================================================================v
// 11. repeat() - Generate a visual divider for a webpage
function visualDivider() {
  return "=".repeat(50);
}

// console.log(visualDivider());

//=======================================================================================================================================v
// 12. concat() - Combine two parts of a title into one
let part1 = "JavaScript";
let part2 = "String Methods";

function combineTitles(part1, part2) {
  return part1.concat(" ", part2);
}
// console.log(combineTitles(part1, part2));

//=======================================================================================================================================v
// 13. indexOf() & lastIndexOf() - Find the first and last occurrence of a keyword in a paragraph
//13.1
function findKeywordOccurrences(text, keyword) {
  return {
    firstIndex: text.indexOf(keyword),
    lastIndex: text.lastIndexOf(keyword),
  };
}

// console.log(findKeywordOccurrences("JavaScript world world", "world"));

//13.2 other way(easier)

let text = "i love sara sara";

function findOccurrences(text) {
  return {
    firstIndex: text.indexOf("sara"),
    lastIndex: text.lastIndexOf("sara"),
  };
}

console.log(findOccurrences(text));
