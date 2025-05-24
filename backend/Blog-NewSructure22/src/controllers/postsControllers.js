import pool from "../config/db.js";

// Create post
export const createPost = async (req, res) => {
  const { title, content, author } = req.body;
  try {
    await pool.query(
      "INSERT INTO posts (title, content, author) VALUES ($1, $2, $3)",
      [title, content, author]
    );
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating post" });
  }
};

// Read all posts
export const getPosts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM posts ORDER BY id DESC");
    res.render("index", { posts: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching posts" });
  }
};

// Read single post by id
export const getPostById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Post Not Found" });
    }
    res.render("single-post", { post: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching post" });
  }
};

// Update post
export const updatePost = async (req, res) => {
  const id = req.params.id;
  const { title, content, author } = req.body;
  try {
    await pool.query(
      "UPDATE posts SET title = $1, content = $2, author = $3 WHERE id = $4",
      [title, content, author, id]
    );
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error updating post" });
  }
};

// Delete post
export const deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    await pool.query("DELETE FROM posts WHERE id = $1", [id]);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error deleting post" });
  }
};
