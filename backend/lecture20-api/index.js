// monday lecture 28/4 introduction to api 
import express from "express";
//import https from "https";
import bodyParser from "body-parser"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

// Add a route for GET /
app.get("/", (req, res) => {
  res.send("Welcome to my API introduction!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
