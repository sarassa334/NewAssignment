// //lecture10 تدريب من شات تاسك بشبه تبع المحاضرة الرابعة اللي ب
// // 🧠 Practice Task: Age Verification for a Club Website

// import express from "express";
// import bodyParser from "body-parser";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));
// const app = express();
// const port = 3001;

// app.use(bodyParser.urlencoded({ extended: true }));

// // app.post("/verify", (req, res) => {
// //   res.sendFile(__dirname + "/public/verify.html");
// // });

// // app.get("/events", (req, res) => {
// //   res.sendFile(__dirname + "/public/events.html");
// // });

// // app.get("/rejected", (req, res) => {
// //   res.sendFile(__dirname + "/public/rejected.html");
// // });

// // ✅ Middleware just for /check
// function ageCheck(req, res, next) {
//   const age = req.body.age;
//   console.log("age submitted:", age);

//   if (age >= 18) {
//     next();
//   } else {
//     res.sendFile(__dirname + "/public/rejected.html");
//   }
// }
// // app.use(ageCheck);


// app.post("/verify", ageCheck, (req, res) => {
//     res.sendFile(__dirname + "/public/verify.html"); // If age is valid, show events page
//   });

//   app.get("/events", (req, res) => {
//     res.sendFile(__dirname + "/public/events.html");
//   });
  
//   app.get("/rejected", (req, res) => {
//     res.sendFile(__dirname + "/public/rejected.html");
//   });

// //server (openning doors)
// app.listen(port, () => {
//   console.log(`✅ Server running at http://localhost:${port}`);
// });
//==============================================================================================

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to check age
function ageCheck(req, res, next) {
  const age = req.body.age;
  console.log("Age submitted:", age);

  // Check if the age is valid
  if (age >= 18) {
    next(); // Proceed to the next route if age is valid
  } else {
    res.sendFile(__dirname + "/public/rejected.html"); // Redirect to rejected if age is under 18
  }
}

// Routes
app.get("/verify", (req, res) => {
  res.sendFile(__dirname + "/public/verify.html"); // Show the form to submit age
});

// The post route to verify the age and show events if valid
app.post("/verify", ageCheck, (req, res) => {
  res.sendFile(__dirname + "/public/events.html"); // If age is valid, show events page
});

// Events page
app.get("/events", (req, res) => {
  res.sendFile(__dirname + "/public/events.html");
});

// Rejected page if the age is invalid
app.get("/rejected", (req, res) => {
  res.sendFile(__dirname + "/public/rejected.html");
});

// Start the server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});


