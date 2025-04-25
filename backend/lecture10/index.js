// lecture4 assignment 

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended:true}));


app.get("/check",(req,res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/secret", (req, res) => {
    res.sendFile(__dirname + "/public/secret.html");
  });


  // custom middleware 
function saveToDb(req, res, next) {
    const password = req.body.password;
    console.log("Password submitted:", password);
  
    if (password === "backend") {
      res.sendFile(__dirname + "/public/secret.html");
    } else {
      res.sendFile(__dirname + "/public/index.html");
    }
next()
  }
  app.use(saveToDb)
  
  app.post("/success", (req,res)=>{});
  
  app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
  });



// function saveToDb(req,res,next){
// userInfo.password = req.body.password;


// if (password === "backend") {
//     res.sendFile(__dirname + "/public/secret.html");
//   } else {
//     // Stay on form page (or send error message)
//     res.sendFile(__dirname + "/public/index.html");
//   }

// next();
// }


// app.post("/success", saveToDb, (req, res) => {
//     const password = req.body.password;
//   console.log("Password submitted:", password);

//   });

//     app.listen(port, () => {
//         console.log(`Server running at http://localhost:${port}`);
//       });













// import express from "express";
// import bodyParser from "body-parser";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));
// const app = express();
// const port = 4000;

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));

// // Route: Serve the form page
// app.get("/check", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

// // Route: Serve secret page
// app.get("/secret", (req, res) => {
//   res.sendFile(__dirname + "/public/secret.html");
// });

// // custom middleware 
// function saveToDb(req, res, next) {
//   const password = req.body.password;
//   console.log("Password submitted:", password);

//   if (password === "backend") {
//     // If correct → redirect to /secret
//     res.redirect("/secret");
//   } else {
//     // If wrong → reload form page
//     res.sendFile(__dirname + "/public/index.html");
//   }
// }

// // Use custom middleware in the post route
// app.post("/success", saveToDb);

// // Start server
// app.listen(port, () => {
//   console.log(`✅ Server running at http://localhost:${port}`);
// });














