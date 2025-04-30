import express from "express";

const app = express();

const port = 7000;

app.use(express.static("public"));
app.use(express.static("partials"));


app.set('view engine', 'ejs');
app.set('views', './views'); // folder where your .ejs files are

//routes
app.get("/", (req,res)=>{
    app.render("index.ejs");
})

app.post("/submit",(req,res)=>{
const myCity = arr1[Math.floor(Math.floor(Math.random() * arr1.length))];
const myColor = arr2[Math.floor(Math.floor(Math.random() * arr2.length))];

    res.render("index" , 
        {city : myCity , color:myColor }
    );
})

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
});


const arr1 = ["Amman", "Paris", "Tokyo", "New York", "alramleh","besan","jenin"];
const arr2 = ["Red", "Blue", "Green", "Yellow","gray"];

















