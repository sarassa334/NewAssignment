// import express from "express";
// import bodyParser from "body-parser"; //rout handlers لازم نستخدمو  قبل ال
// // عشان اقدر اوصل لصفحة الhtml بشكل داينامك
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const _dirname = dirname(fileURLToPath(import.meta.url));
// const app = express();
// const port = 3000;
// let userInfo = {
//   email: null,
//   password: null,
// };

// app.use(bodyParser.urlencoded({ extended: true })); // بتعامل اليوس مع الميدل وير كيف ب انو بروح عالميدل وير بعدين الراوت هاندلر
// // بقدر اعمل اكتر من ميدل وير

// app.use(saveToDb);

// app.get("/", (req, res) => {
//   res.sendFile(_dirname + "/public/index.html"); //html هيك قدرت اعمل load لل  بطريقة نظيفة
// });

// function saveToDb(req, res, next) {
//   userInfo.email = req.body.email;
//   userInfo.password = req.body.password;
//   next(); // لازم تنادي next عشان يكمل للراوت handler
// }
// // النيكست ضرورية حتى ينتقل للفنكشن اللي بعد بدونها بضل معلق بهاد الفنكشن

// // Handle form submission
// app.post("/submit", saveToDb, (req, res) => {
//     // console.log(req.body);

//   res.send(
//     `<h1>Your email is ${userInfo.email} and password is ${userInfo.password}</h1>`
//   );
// });

// // app.post('/submit',()=>{
// //     console.log(req.body);
// //     res.send(`<h1>your email ${userInfo.email} and password ${userInfo.password}</h1>`)
// // });

// app.listen(port, () => {
//   console.log("Server");
// });

//=====================================================================================
// // app.get('/',(req,res)=>{
// //     res.send("<h1>hello</h1>");
// // });

// // app.patch('/test',(req,res)=>{
// //     res.sendStatus(203);
// // });

// // app.post('/contact',(req,res)=>{ // .post('/contact' (rout handler) هيك اسمو
// //     res.sendStatus(201);
// // });

// // app.post('/about',(req,res)=>{
// //     console.log(req);
// //     res.send("<h1>hello,about</h1>");
// // });

// // app.put('/login', (req, res) => {
// //     res.sendStatus(204);
// //   });

// // app.listen(port,()=>{
// //     console.log("Server");
// // });

//=====================================================================================================================
// // chat gbt (fixed the problem of email code)

// import morgan from "morgan";
import express from "express"; // framework
import bodyParser from "body-parser"; //It's a middleware (a tool that works between the request and your code).// tool (that helps your app read data from an HTML form.)
import { dirname } from "path"; // dirname (function) from Node.js’s built-in path module.
import { fileURLToPath } from "url"; // fileURLToPath (function) from Node.js’s built-in url module.

const __dirname = dirname(fileURLToPath(import.meta.url));// Give me the folder path of the current file."
const app = express(); //function call /When you run express(), it creates a new Express application object.
const port = 3000;

// Store user info
let userInfo = {
   email: null, //null means: “I know this will have a value later, but right now it's empty.”
  password: null,
};

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true })); //You're talking to that Express server you just created. //{ extended: true } : “Hey Express! For every incoming request, if it has form data (from an HTML form), please parse it and convert it into a nice JavaScript object (req.body), even if the structure is a bit complex.”

// Route to show HTML form
app.get("/", (req, res) => { // app :app is an object filled with functions
  res.sendFile(__dirname + "/public/index.html");
});

// Custom middleware to save form data
function saveToDb(req, res, next) {
  userInfo.email = req.body.email;
  userInfo.password = req.body.password;
  next(); // Move to next handler
}

// Handle form submission using POST and middleware
app.post("/submit", saveToDb, (req, res) => { //This code will run only when someone submits a form using the POST method.
  console.log(req.body);
  res.send(
    `<h1>Your email is ${userInfo.email} and password is ${userInfo.password}</h1>`
  );
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

//=======================================================================================
// final result (chat gbt) weird output
// import express from "express";
// import bodyParser from "body-parser";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));
// const app = express();
// const port = 3000;

// // Middleware: Parse URL-encoded form data
// app.use(bodyParser.urlencoded({ extended: true }));

// // Store user data
// let userInfo = {
//   email: null,
//   password: null,
// };

// // Route: Serve HTML form
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

// // Custom Middleware: Save form data
// function saveToDb(req, res, next) {
//   userInfo.email = req.body.email;
//   userInfo.password = req.body.password;

//   // ✅ Log to terminal
//   console.log(`Email: ${userInfo.email}`);
//   console.log(`Password: ${userInfo.password}`);

//   next();
// }

// // Route: Handle form submission
// app.post("/submit", saveToDb, (req, res) => {
//   res.send(
//     `<h1>Your email is ${userInfo.email} and your password is ${userInfo.password}</h1>`
//   );
// });

// // Optional route if you want to use redirection instead
// app.get("/success", (req, res) => {
//   res.send(
//     `<h1>Submitted Successfully!</h1>
//      <p>Email: ${userInfo.email}</p>
//      <p>Password: ${userInfo.password}</p>`
//   );
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`✅ Server running at http://localhost:${port}`);
// });

//=======================================================================================
//with morgan  (chat gbt)
// import express from "express";
// import bodyParser from "body-parser";
// import morgan from "morgan";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));
// const app = express();
// const port = 3000;

// // Middleware: Log requests
// app.use(morgan("dev"));

// // Middleware: Parse URL-encoded form data
// app.use(bodyParser.urlencoded({ extended: true }));

// // Store user data
// let userInfo = {
//   email: null,
//   password: null,
// };

// // Route: Serve HTML form
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

// // Custom Middleware: Save form data
// function saveToDb(req, res, next) {
//   userInfo.email = req.body.email;
//   userInfo.password = req.body.password;
//   next();
// }

// // Route: Handle form submission
// app.post("/submit", saveToDb, (req, res) => {
//   console.log(req.body)
//   res.send(
//     `<h1>Your email is ${userInfo.email} and your password is ${userInfo.password}</h1>`
//   );

//   // Or optionally redirect to a success page:
//   // res.redirect("/success");
// });

// // Optional route if you want to use redirection instead
// app.get("/success", (req, res) => {
//   res.send(
//     `<h1>Submitted Successfully!</h1>
//      <p>Email: ${userInfo.email}</p>
//      <p>Password: ${userInfo.password}</p>`
//   );
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`✅ Server running at http://localhost:${port}`);
// });
