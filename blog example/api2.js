import express, { response } from "express";
import bodyParser from "body-parser";
import axios from "axios"; // use it to call APIs

const app = express();
const port = 3000;
const api_url = "http://localhost:4000"; //end point => after 4000 it is change
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//=========================================
//show all posts
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${api_url}/posts`);
    res.render("index.ejs", { posts: response.data });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
//=========================================
//multiple route (create----get)
app.get("/create-post", (req, res) => {
  res.render("modify.ejs", {
    heading: "create new post",
    submit: "create post",
  });
});
//=========================================
//create(create----post)
app.post("/api/posts", async (req, res) => {
  try {
    const response = await axios.post(`${api_url}/posts`, {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    });

    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: "internal servar error", error: error });
  }
});
//=========================================
//edit
app.get("/edit-post/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(`${api_url}/posts/${id}`);
    res.render("modify.ejs", {
      heading: "edit new post",
      submit: "edit post",
      post: response.data,
    });
  } catch (error) {
    res.status(500).json({ message: "internal servar error", error: error });
  }
});
//api calls
//  note: name convention is too important
// methods should be the same in api generate and uses of api
//=========================================
//edit => use post method too(patch)

app.post("/api/posts/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const response = await axios.patch(`${api_url}/posts/${id}`, req.body);

    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: "internal servar error", error: error });
  }
});
//=========================================
//delete
app.get("/api/posts/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const response = await axios.delete(`${api_url}/posts/${id}`, req.body); // api call
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: "internal servar error", error: error });
  }
});
//=========================================
app.listen(port, () => {
  console.log("Server running correctly");
});
