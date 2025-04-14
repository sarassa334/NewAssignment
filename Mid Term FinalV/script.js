//swithing between two tabs
document.addEventListener("DOMContentLoaded", function () {
  const createTabBtn = document.getElementById("create-tab");
  const previewTabBtn = document.getElementById("preview-tab");
  const createDivUser = document.getElementById("CreateUserDiv");
  const previewDivUsers = document.getElementById("previewUsersDiv");

  // if i click in createTabBtn show createDivUser(id)
  createTabBtn.addEventListener("click", function () {
    createDivUser.style.display = "block";
    previewDivUsers.style.display = "none";

    createTabBtn.classList.add("active");
    previewTabBtn.classList.remove("active");
  });

  // if i click in createTabBtn show createDivUser(id)
  previewTabBtn.addEventListener("click", function () {
    previewDivUsers.style.display = "block";
    createDivUser.style.display = "none";

    previewTabBtn.classList.add("active");
    createTabBtn.classList.remove("active");
  });
  // Default (showing teh createDivUser)
  createDivUser.style.display = "block";
  previewDivUsers.style.display = "none";
});

// =========================================================================================================================
// user object 

class User {
  constructor(name, email, phone, gender, address) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.gender = gender;
    this.address = address;
  }
}

let userList = []; // like a temporary memory

//===========================================================================================================================
// form validation

function validateUserForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const gender = document.getElementById("gender").value;
  const address = document.getElementById("address").value.trim();

  // select error elements 9span)
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const genderError = document.getElementById("genderError");
  const addressError = document.getElementById("addressError");

  // Clear previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  genderError.textContent = "";
  addressError.textContent = "";

  let isValid = true;

  if (name === "" || !/^[A-Za-z\s]+$/.test(name)) {
    nameError.textContent = "Name must contain only letters and cannot be empty.";
    isValid = false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (!/^\d{10,}$/.test(phone)) {
    phoneError.textContent = "Phone must have at least 10 digits and contain numbers only.";
    isValid = false;
  }

  if (gender === "") {
    genderError.textContent = "Please select a gender.";
    isValid = false;
  }

  if (address === "") {
    addressError.textContent = "Address cannot be empty.";
    isValid = false;
  }

  return isValid;
}

// =========================================================================================================================
// fetch the data from theform and store it in obj to display it latterin the table and cards

function addUser(event) {
  event.preventDefault(); // this is important (withot this method calling the form will submit and reload the page)

  if (!validateUserForm()) {
    return; // stop if not valid
  }

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const gender = document.getElementById("gender").value;
  const address = document.getElementById("address").value;
  //we use the user class tocreate a newuser object and then we add every new user to the userList
  const user = new User(name, email, phone, gender, address);
  userList.push(user);
  // we  select the tbody andthe tr from the table
  const table = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];
  const row = document.createElement("tr");
  // creating the needed cells
  const nameTd = document.createElement("td");
  nameTd.innerHTML = `<div class="d-flex align-items-center">
  <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 45px; height: 45px" class="rounded-circle">
  <div class="ms-3">
    <p class="fw-bold mb-1">${name}</p>
  </div>
</div>`;

  const emailTd = document.createElement("td");
  emailTd.textContent = email;

  const phoneTd = document.createElement("td");
  phoneTd.textContent = phone;

  const addressTd = document.createElement("td");
  addressTd.textContent = address;

  const genderTd = document.createElement("td");
  genderTd.textContent = gender;

  // append the cells to row
  row.appendChild(nameTd);
  row.appendChild(emailTd);
  row.appendChild(phoneTd);
  row.appendChild(addressTd);
  row.appendChild(genderTd);
  // append the cells to table
  table.appendChild(row);

  //==================================== (new steps)
  // 1-success message 2-reset the form after wefinish

  const successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";

  setTimeout(() => {
    // hide successMessage
    successMessage.style.display = "none";
    //clear form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("address").value = "";
  }, 1000);
}
// =======================================================================================================================
// view users for the taple

function viewUserTable() {
  const table = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0]; //table body
  table.innerHTML = ""; // if this code is not here like in (Assignment13-js) code every time we add and show willbe duplicate(multiple rows for the same users)
  //crete a tr foreach user thestored in the  userList
  userList.forEach((ele) => {
    const row = document.createElement("tr");

    // exactly the same steps we did in addUser funtion
    const nameTd = document.createElement("td");
    nameTd.innerHTML = `<div class="d-flex align-items-center">
  <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 45px; height: 45px" class="rounded-circle">
  <div class="ms-3">
    <p class="fw-bold mb-1">${ele.name}</p>
  </div>
</div>`;

    const emailTd = document.createElement("td");
    emailTd.textContent = ele.email; // Access the email property of the current user

    const phoneTd = document.createElement("td");
    phoneTd.textContent = ele.phone;

    const addressTd = document.createElement("td");
    addressTd.textContent = ele.address;

    const genderTd = document.createElement("td");
    genderTd.textContent = ele.gender;
    // append the cells to row
    row.appendChild(nameTd);
    row.appendChild(emailTd);
    row.appendChild(phoneTd);
    row.appendChild(addressTd);
    row.appendChild(genderTd);
    // append the cells to table
    table.appendChild(row);
  });
}

// =======================================================================================================================
// view users for the cards
function viewUsersCards() {
  const cardsDiv = document.getElementById("cardViewContent");
  cardsDiv.innerHTML = "";
// for the alert message
  if (userList.length === 0) {
    const alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-warning text-center w-100";
    alertDiv.textContent = "No users yet.";
    cardsDiv.appendChild(alertDiv);
    return;
  }
//end for the alert message
  userList.forEach((user) => {
    const cardColumn = document.createElement("div");
    cardColumn.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3");

    const mycard = document.createElement("div");
    mycard.classList.add("card", "pb-3");

    mycard.innerHTML = `<div class="card-body">
        <h5 class="card-title text-center fs-4 fw-bold">${user.name}</h5>
        <p class="card-text"><strong>Email:</strong> ${user.email}</p>
        <p class="card-text"><strong>Phone:</strong> ${user.phone}</p>
        <p class="card-text"><strong>Address:</strong> ${user.address}</p>
        <p class="card-text"><strong>Gender:</strong> ${user.gender}</p>
        <a href="#" class="btn btn-primary w-100" data-mdb-ripple-init>View Details</a>
      </div>`;

    cardColumn.appendChild(mycard);

    cardsDiv.appendChild(cardColumn);
  });
}


// =======================================================================================================================
// toggle button between taple and cards view
// the same asthe toggle between tabsidea

document.getElementById("toggleViewBtn").addEventListener("click", function () {
  const tableView = document.getElementById("tableView");
  const cardView = document.getElementById("cardView");

  if (tableView.style.display !== "none") {
    tableView.style.display = "none";
    cardView.style.display = "block";
    this.textContent = "Switch to Table View";
    viewUsersCards();
  } else {
    cardView.style.display = "none";
    tableView.style.display = "block";
    this.textContent = "Switch to Card View";
    viewUserTable(); 
  }
});

