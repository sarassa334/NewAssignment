// document.getElementById("demo").innerHTML="Hello world";

// let x=10;

// x=20;

// first lecture
 //number
let x=13;
let y=1.5;

//string
let name1="fatima";
let lastName="ahmad";

//Booleans
let z = true;
let w = false;

//object
let person ={
    number :"076843512845",
    age :30,
    salary: 5786453,
};

//array
let car=["bmw", "WW" ,"Kia" ];

//Dateobject
let date=new Date();


let result =name1+ " "+lastName+" "+x +" "+z;
let result1=z+x;
 // بتعامل في حالة الجمع ال boolean ك رقم 
//console.log(result);
//console.log(result1); 
//هون النتاتج 14 لانه ال ture=1


//===============================================================================
//console.log(typeof result);
//console.log(typeof result1);
//console.log(typeof person);

//funcation how to use
function firstFun(x,y){
    return x+y;
}
//console.log(firstFun(10,15));  

function toCelsius(fer){
    return (5/9) * (fer-32);
}
//console.log(toCelsius(90));  

//object 
let cars={
    name1:"fint",
    model:"e200",
    color:"red",
    info:function(){
        return this.name1+" "+this.model+this.color;
    },
};
//console.log(cars.print()); //error
//console.log(cars.info());  //fint e200red
//console.log(cars.name1); 
//console.log(cars.model); 
 


let cars1={
    name1:"fint",
    model:"e200",
    color:"red",
    info:function(){
        return this.name1+" "+this.model+this.color; //funcation inside the object = (Methode)
    },
};
//console.log(cars1.info()); 

   cars1.print=function(){
    return this.name1+" "+this.model;  //we can add property and methodes 
   }

   cars1.country={
        name:"jordan",
        id:"JD",         //we add new proparety  
   }

   //console.log(cars1);
   //console.log(cars1.print());
   //console.log(cars1.country.name);
   //console.log(cars1);



// console.log(this.confirm ("are you sure")); //alert message



let user={
    name:"Fatima",
    age:30, // "30" is string
    salary:"2000jd",  
    car:{
        name:"BMW",
        model:"M3", 

    }
}

  //console.log(user);
  user.number="079647964865";// first methode to add property 
  //console.log(user.number);
  //console.log(user);

  //here======================================================================================

  user['number2']="06453";// second method to add property 
  //console.log(user.number2); // هون في المرة الأ,لى عادي طبع الرقم 
  //delete user['number2'];// we use delete methode for object
  //console.log(user.number2);// مارح يطبع الرقم لانه حذفناه undefined
  //console.log(user); //ببين عندي انه انحذف الرقم 
  //======================================================================================
//console.log(user.name);// first method for access the object 
//console.log(user["age"]);// sec method for access the object 

//console.log(user.car.name);//هون كيف اوصل ل اسم السيارة في حالة ال nested object


//document.getElementById("demo").innerHTML=user.name; //the html will print the name
//document.getElementById("demo").innerHTML=cars1.info(); //رح يطبع ال funcation هي طريقة او loop 


//method for print the object in html
let result2="";

for(let x in user)
    result2=result2+" "+user[x];
//document.getElementById("demo").innerHTML=result2; 


//method for print the object in html using object class
//document.getElementById("demo").innerHTML=Object.values(user); 

//print the valuse for user with property as string 
//document.getElementById("demo").innerHTML=JSON.stringify(user); //stringify convert the object into string and print it 
//=======================================================================
// if (user.age>30){
//     document.getElementById("demo").innerHTML="age bigger than 30";
// }
// else if(user.age === 30){
//     document.getElementById("demo").innerHTML="age is 30";
// }
// else if(user.age<30){
//     document.getElementById("demo").innerHTML="age smaller than 30";
// }else{
//      console.log("noooo");
// };
//=======================================================================
//notes :
// new Date() creates a Date object representing the current date and time.
//.getDay() is a built-in method that returns the day of the week as a number (0-6).

// let day;

// switch(new Date().getDay()) { 
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;
//     default:
//         day = "Unknown"; 
// }

//console.log(day);
//console.log(new Date().getDay()); // If today is Wednesday, output will be 3
//=====================================================================================
// Instead of switch, you can use an array for a more efficient solution:

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[new Date().getDay()];

console.log(day);















 