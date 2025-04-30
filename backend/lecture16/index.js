// import express from "express";
// const app = express();

// let arr1 = ["hussam","sara"];
// let arr2 = ["cat","dog"];

// let randomName =arr1[Math.floor(Math.random()*arr1.length)];// جبت الراندوم نيم من هون
// let randomPet =arr2[Math.floor(Math.random()*arr2.length)];// جبت الراندوم نيم من هون

// let random = Math.floor(Math.random()*11);
// app.use(express.static("public"));

// const port = 4000;

// app.get("/",(req,res)=>{
//     app.render("index.ejs");
// });
// app.get("/about",(req,res)=>{
//     app.render("about.ejs");
// });
// app.get("/contact",(req,res)=>{
//     app.render("contact.ejs");
// });

// app.listen(port, () => {});

//=======================================================================================================

// import express from "express";
// import path from "path";
// import { fileURLToPath } from 'url';

// const app = express();

// // fix __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Setup
// app.use(express.static("public"));
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// let arr1 = ["hussam", "sara"];
// let arr2 = ["cat", "dog"];

// const port = 4000;

// //routes
// app.get("/", (req, res) => {
//     res.render("index");
// });

// app.post("/randoms", (req, res) => {
//     const randomName = arr1[Math.floor(Math.random() * arr1.length)];
//     const randomPet = arr2[Math.floor(Math.random() * arr2.length)];
//     res.render("randomResult", { name: randomName, pet: randomPet });
// });

// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });

//=======================================================================================================
//كود المهندس

import express from "express";
const app = express();


app.use(express.static("public"));

const port = 4000;

app.set('view engine', 'ejs');
app.set('views', './views'); // folder where your .ejs files are
//routes
app.get("/", (req, res) => {
    res.render("index.ejs");
});


app.post("/submit", (req, res) => {
    const randomName = arr1[Math.floor(Math.random() * arr1.length)];
    const randomPet = arr2[Math.floor(Math.random() * arr2.length)];
    res.render("index",
         { name: randomName, pet: randomPet });
});




app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});




const arr1 = ["hussam", "sara"];
const arr2 = ["cat", "dog"];









