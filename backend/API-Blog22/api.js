import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const api_url = "http://localhost:4000";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

//show all posts
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${api_url}/posts`);
    res.render("index", { posts: response.data });
  } catch (error) {
    res.status(500).json({ error: "Error fetching posts" });
  }
});

// shows single post
app.get("/post/:id", async (req, res) => {
  try {
    const response = await axios.get(`${api_url}/posts/${req.params.id}`);
    res.render("single-post", { post: response.data });
  } catch (error) {
    res.status(404).json({ error: "Post Not Found" });
  }
});

// creat post
app.get("/new", (req, res) => {
  res.render("new-post");
});

// creat post (api call)
app.post("/api/posts", async (req, res) => {
  try {
    await axios.post(`${api_url}/posts`, {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    });
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ error: "Error creating post" });
  }
});

// edit post 
app.get("/edit-post/:id", async (req, res) => {
  try {
    const response = await axios.get(`${api_url}/posts/${req.params.id}`);
    res.render("edit-post", { post: response.data });
  } catch (error) {
    res.status(404).json({ error: "Post Not Found" });
  }
});

// edit post (api call - patch) 
app.post("/api/posts/:id", async (req, res) => {
  try {
    await axios.patch(`${api_url}/posts/${req.params.id}`, {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    });
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ error: "Error editing post" });
  }
});

// delete post (api call)
app.get("/api/posts/delete/:id", async (req, res) => {
  try {
    await axios.delete(`${api_url}/posts/${req.params.id}`);
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ error: "Error deleting post" });
  }
});

app.listen(port, () => {
  console.log("Client app running on http://localhost:3000");
});
