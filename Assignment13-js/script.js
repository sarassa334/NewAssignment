//لو بدي اضيف داتا راجعتلي من داتابيس

// let data = [
//   {
//     name: "test 1",
//     age: 30,
//     email: "ex@example.com",
//   },
//   {
//     name: "test 2",
//     age: 30,
//     email: "ex@example.com",
//   },
//   {
//     name: "test 3",
//     age: 30,
//     email: "ex@example.com",
//   },
//   {
//     name: "test 4",
//     age: 30,
//     email: "ex@example.com",
//   },
// ];

// function addRow() {
//   const table = document
//     .getElementById("table")
//     .getElementsByTagName("tbody")[0];

//   data.forEach((ele) => {
//     const row = document.createElement("tr");

//     const nameTd = document.createElement("td");
//     nameTd.textContent = ele.name;

//     const age = document.createElement("td");
//     age.textContent = ele.age;

//     const email = document.createElement("td");
//     email.textContent = ele.email;

//     row.appendChild(nameTd);
//     row.appendChild(age);
//     row.appendChild(email);

//     table.appendChild(row);
//   });
// }

//------- اذا بدي اضيف يدوي عادي ----------------------
// function addRow() {
//   const table = document
//     .getElementById("table")
//     .getElementsByTagName("tbody")[0];

//   const row = document.createElement("tr");

//   const nameTd = document.createElement("td");
//   nameTd.textContent = "nour";

//   const age = document.createElement("td");
//   age.textContent = "25";

//   const email = document.createElement("td");
//   email.textContent = "ex@example.com";

//   row.appendChild(nameTd);
//   row.appendChild(age);
//   row.appendChild(email);

//   table.appendChild(row);
// }

//---------------------اذا بدي اضيف الداتا الي يدخلها اليوزر في الفورم على جدول-------------------
// let userList = [];

// function addUser() {
//   const name = document.getElementById("name").value;
//   const age = document.getElementById("age").value;
//   const email = document.getElementById("email").value;

//   userList.push({
//     name:name,
//     age:age,
//     email:email

//   })
// // عشان اعمل كلير للانبوت بعد ما اكبس اضافة مستخدم
//   document.getElementById("name").value = ""
//   document.getElementById("age").value = ""
//   document.getElementById("email").value = ""

// }

// function viewUser() {
//     const table = document
//       .getElementById("table")
//       .getElementsByTagName("tbody")[0];

//     userList.forEach((ele) => {
//       const row = document.createElement("tr");

//       const nameTd = document.createElement("td");
//       nameTd.textContent = ele.name;

//       const age = document.createElement("td");
//       age.textContent = ele.age;

//       const email = document.createElement("td");
//       email.textContent = ele.email;

//       row.appendChild(nameTd);
//       row.appendChild(age);
//       row.appendChild(email);

//       table.appendChild(row);
//     });
//   }

// -----------------------لو بدي اخزن بطريقة ال OOP --------------------

class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}
let userList = [];

function addUser() {
  
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;

const user = new User(name,age,email)
userList.push(user);


  // عشان اعمل كلير للانبوت بعد ما اكبس اضافة مستخدم
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";
}

function viewUser() {
  const table = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];
    //table.innerHTML =""; 

  userList.forEach((ele) => {
    const row = document.createElement("tr");

    const nameTd = document.createElement("td");
    nameTd.textContent = ele.name;

    const age = document.createElement("td");
    age.textContent = ele.age;

    const email = document.createElement("td");
    email.textContent = ele.email;

    row.appendChild(nameTd);
    row.appendChild(age);
    row.appendChild(email);

    table.appendChild(row);
  });
}