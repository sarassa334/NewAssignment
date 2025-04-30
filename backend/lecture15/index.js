//ejs

import express from "express";
import bodyParser from "body-parser";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const fullName = req.body["firstname"] + " " + req.body["lastname"];
  const numberOfletters =
    req.body["firstname"].length + req.body["lastname"].length;
  res.render("index.ejs", {
    numberOfletters: numberOfletters,
    fullName: fullName,
  });
});

app.listen(port, () => {
  console.log("server is done");
});
