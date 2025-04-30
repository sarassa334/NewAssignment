import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const app = express();
const PORT = 8080;

// For resolving __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In-memory storage
let posts = [];

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.render("index", { posts });
});

app.get("/new", (req, res) => {
  res.render("new-post");
});

app.post("/new", (req, res) => {
  const { title, content } = req.body;
  if (title && content) {
    posts.unshift({ id: Date.now(), title, content });
  }
  res.redirect("/");
});

app.get("/delete/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  posts = posts.filter((post) => post.id !== postId);
  res.redirect("/");
});
// Route to edit a post
app.get("/edit/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find((p) => p.id === postId);
    if (post) {
      res.render("edit-post", { post });
    } else {
      res.redirect("/");
    }
  });
  // Route to update a post
app.post("/edit/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, content } = req.body;
    
    let post = posts.find((p) => p.id === postId);
    if (post) {
      post.title = title;
      post.content = content;
    }
    res.redirect("/");
  });
  
// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
