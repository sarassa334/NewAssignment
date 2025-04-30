// اول محاضرة api
import express from "express";
import https from "https";
import bodyParser from "body-parser";

const app = express();

const port = 3002;


app.use(bodyParser.urlencoded({ extended: true }));








//server
app.listen(port, ()=>{})


