// كود المحاضرة التالتة انا كتبتو لحالي
// morgan

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3001;

let userInfo = {
    email:null,
    password:null,
}

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(req,res) => {
    res.sendFile(__dirname + "/public/index.html");
});

function saveToDb(req,res,next){
userInfo.email = req.body.email;
userInfo.password = req.body.password;
next();
}


app.post("/submit", saveToDb, (req, res) => {
    console.log(req.body);
    res.send(`<h1>This is the email: ${userInfo.email} and the password is: ${userInfo.password}</h1>`);
  });

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
      });



