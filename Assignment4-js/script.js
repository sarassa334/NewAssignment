let str='nour ';
// console.log(str.length);
// ================================================================================================================================
function validateDescription(description){
    if(description.length > 100){
        return "description is too long";
    }
    return "description is valid";
}


// console.log(
//     validateDescription("bshvbhvsfjsfcjgcsjbkjbs")
// )
// ================================================================================================================================

//index start from 0 but lenght start from 1
// slice start like array
let str1='javascript';
// console.log(str1.slice(0,0));
// console.log(str1.slice(0,1));//j
// console.log(str1.slice(0,5));//javas
// console.log(str1.slice(4));//script
// console.log(str1.slice(-6));//script -back and mince is not important

// ================================================================================================================================

function readMore(stri){
    return stri.slice(0,50) + "...Read more";
}
// console.log(readMore("Technology has significantly transformed the way we live, work, and communicate. The rapid advancement of artificial intelligence, the internet, and mobile devices has made information more accessible than ever before. Businesses rely on technology to streamline operations, improve efficiency, and enhance customer experiences. Additionally, social media platforms have changed the way people interact, allowing for instant communication across the globe. However, while technology brings many benefits, it also presents challenges such as privacy concerns, cybersecurity threats, and the potential for social isolation. Balancing innovation with ethical considerations is essential for a sustainable future."))
// ================================================================================================================================

let st3 = 'javaScript';
// console.log(st3.charAt(0));
// console.log(st3.toUpperCase());
// console.log(st3.toLowerCase());//in email convert to lowercase

// ================================================================================================================================

// merge more than one methods (method chain)
function checkUsername(username){
    return username.charAt(0).toUpperCase() + username.slice(1,username.length);//السلايس عشان يكتب الاسم كامل
}
// console.log(checkUsername("nour"));
// ================================================================================================================================

//to remove the over spaces
let st5 ="         hello javaScript        "
// console.log(st5);
// console.log(st5.trim());

// ================================================================================================================================

function cleanEmail(email){
    return email.trim().toLowerCase();
}
//   console.log(cleanEmail("  User@example.com    ")); 
// ================================================================================================================================

let st6="    Hello JavaScript";
// console.log(st6.substring(0,7)); 
// ================================================================================================================================

// without repeat (يعني قد كان عدد الارقام الي يدخلها اليوزر بدي اخفي 3 ارقام)
// function maskPhone(str7){
//     return "* * *" + str7.substring(str7.length -3);
// }

// with repeat(يعني قد كان عدد الارقام الي يدخلها اليوزر بدي اخفي 3 ارقام)
function maskPhone(str7){
    return "*".repeat(str7.length -3) + str7.substring(str7.length -3);
}

// console.log(maskPhone('0772839753'));


// console.log("nour ".repeat(3));

// ================================================================================================================================

let st8 = 'javaScript java';
// console.log(st8.replace("java","hello "));// لاول تطابق تلاقيه تبدل 
//I need to replace every java  ((regular expration))
// console.log(st8.replaceAll('java',"hello"));// لكل تطابق تلاقيه تبدل 
// console.log(st8.replace(/java/g,"hello"));// لكل تطابق تلاقيه تبدل (Regular Expressions JS)
// ================================================================================================================================

let str10 ="javascript world , world";
// console.log(str10.split(" ")); //     ترجع ارري و تفصل بناء على شي معين

// console.log(str10.includes("script"));// ترجع true or fualse
// ================================================================================================================================
// check the array char by char
let str11= 'bdbgdb badWords blvbl badWords ';
function checkBadWords(str11){
    if(str11.includes("badWords")){
        return str11.replaceAll("badWords" ,"*****")
    }
    return "approved word";
}

// console.log(checkBadWords(str11));
// ================================================================================================================================

let st12= " javascript world world";
// console.log(st12.endsWith("rd"));// fualse
// console.log(st12.endsWith("ld"));//true

// ================================================================================================================================

let fileName = "test.jp";
function testImage(fileName){
    if(fileName.endsWith('.jpg') || fileName.endsWith('.png')){
        return 'accepted';
        } else{
            return 'not accepted';
        }
}
console.log(testImage(fileName));
console.log(testImage('test.png'));
// ================================================================================================================================

let st13= " javascript world world";
// console.log(st13.indexOf("pt"));//return number(index) (first show) 9
// console.log(st13.indexOf("ld"));// first show 15
// console.log(st13.lastIndexOf("ld"));// last show 21
// if return -1 this mean it is not found