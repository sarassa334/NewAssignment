import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 8081;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

let posts =[];
// const posts = [
//     { id: 1, title: "First Post", content: "Hello World!" },
//     { id: 2, title: "Second Post", content: "Learning EJS!" }
// ];
// ejs engine
// app.set('views', 'C:\\Users\\Othman\\MyBlog2-BK\\views');
app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, "views"));


//routes
app.get('/', (req, res) => {
    res.render("index", { posts });
  });

//new post
//app.get()
  app.get('/new', (req, res) => {
      res.render("new" );
    });

//app.post()
app.post("/new",(req,res)=>{
    const newPost = {
         id: Date.now(),
         title : req.body.title,
         content : req.body.content,
    }
    posts.unshift(newPost);
// res.render('new', { title: title , content:content});
res.redirect("/");
});

//====================
//edit post

// GET route - Show edit form

app.get("/edit/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const foundPost = posts.find(post => post.id === postId);
    
    if (!foundPost) {
      return res.status(404).send("Post not found");
    }
    
    res.render("edit", { post: foundPost });
  });
  
  // POST route - Update post
  app.post("/edit/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(post => post.id === postId);
    
    if (postIndex === -1) {
      return res.status(404).send("Post not found");
    }
    
    // Update the post
    posts[postIndex] = {
      id: postId,
      title: req.body.title,
      content: req.body.content
    };
    
    res.redirect("/");
  });
//===================
//delete
app.get('/delete/:id', (req, res) => {  
    const postId = parseInt(req.params.id);//2
    posts = posts.filter(post => post.id !== postId);
    res.redirect("/");
});

//server
app.listen(port, () => {
  console.log("success");
});

// هاي صفحة البلوق القديمة كود eya
// //1
// import express from "express";
// import path from "path"; // eya way
// import { dirname } from "path"; // eya way
// import bodyParser from "body-parser";
// import { fileURLToPath } from "url";

// const app = express();
// const port = 8080;

// // eya way
// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);

// // my way
// const __dirname = dirname(fileURLToPath(import.meta.url));

// // posts array
// let posts = [];

// // Set EJS engine (Without this, Express wouldn’t know how to process .ejs files (like index.ejs).)
// app.set("view engine", "ejs"); // app.set() ==> Think of it as configuring global options for your application
// app.set("views", path.join(__dirname, "views")); // path.join() ==> Combines path segments into a complete path string

// // Middleware
// app.use(express.static(path.join(__dirname, "public")));// eya way // express.static ?  built-in Express middleware that serves static files (like HTML, CSS, JS, images) to the browser.
// app.use(bodyParser.urlencoded({ extended: true }));

// // Routes
// app.get("/", (req, res) => {
//   res.render("index", { posts });
// });
//========================
// app.get("/new", (req, res) => {
//   res.render("new-post");
// });

// app.post("/new", (req, res) => {
//   const { title, content } = req.body;
//   if (title && content) {
//     posts.unshift({ id: Date.now(), title, content });
//   }
//   res.redirect("/");
// });
//========================
// app.get("/edit/:id", (req, res) => {
//   const postId = parseInt(req.params.id);
//   const post = posts.find((p) => p.id === postId);
//   if (post) {
//     res.render("edit-post", { post });
//   } else {
//     res.redirect("/");
//   }
// });

// app.post("/edit/:id", (req, res) => {
//   const postId = parseInt(req.params.id);
//   const { title, content } = req.body;

//   const post = posts.find((p) => p.id === postId);
//   if (post) {
//     post.title = title;
//     post.content = content;
//   }
//   res.redirect("/");
// });
//========================
// app.get("/delete/:id", (req, res) => {
//   const postId = parseInt(req.params.id);
//   posts = posts.filter((post) => post.id !== postId);
//   res.redirect("/");
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });


































