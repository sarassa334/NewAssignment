// lecture5

// import express from "express";
// import bodyParser from "body-parser";
// import { dirname } from "path";
// import { fileURLToPath } from "url";


// const __dirname = dirname(fileURLToPath(import.meta.url));
// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html"); 
//   });

//   app.post("/submit",(req, res) => {
// const name = req.body.name;
// res.render('index.ejs',{
//     name:name, // attribute
// })
// // res.send(`<!DOCTY'PE html>
// // <html lang="en">
// // <head>
// //     <meta charset="UTF-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>Document</title>
// // </head>
// // <body>
// //     <h1> hello, ${name}</h1>
// // </body>
// // </html>`);
//   });

// // Start the server
// app.listen(port, () => {
//     //console.log(`✅ Server running at http://localhost:${port}`);
//   });


import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html"); 
});

app.post("/submit", (req, res) => {
    const name = req.body.name;
    res.render('index', { name: name });
});

app.listen(port, () => {
    // console.log(`✅ Server running at http://localhost:${port}`);
});































