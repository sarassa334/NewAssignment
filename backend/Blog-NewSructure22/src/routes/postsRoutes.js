import express from "express";
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/postsController.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/post/:id", getPostById);
router.get("/new", (req, res) => res.render("new-post"));
router.post("/posts", createPost);
router.get("/edit-post/:id", getPostById); // You might want a separate controller method to render edit view
router.post("/posts/:id", updatePost);
router.get("/posts/delete/:id", deletePost);

export default router;
