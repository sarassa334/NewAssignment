import express from "express";
import { truncateContent } from "../utils/utils.js"; // If needed, create a utility for truncation

const router = express.Router();

// Sample posts data (You can modify this to come from a database)
let posts = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    content:
      "A closure is one of the most powerful and essential features in JavaScript...",
  },
  {
    id: 2,
    title: "CSS Flexbox vs Grid: Which Database to Use?",
    content:
      "In modern web development, CSS Flexbox and Grid are the two primary tools for creating layouts...",
  },
  // Additional posts...
];

// Utility function to truncate content
function truncateContent(content, maxLength = 200) {
  return content.length > maxLength ? content.slice(0, maxLength) + "..." : content;
}

// Remove duplicates and truncate content
posts = posts.filter(
  (post, index, self) =>
    index === self.findIndex((p) => p.title === post.title && p.content === post.content)
);
posts = posts.map((post) => ({
  ...post,
  content: truncateContent(post.content) + " Read more"
}));

// GET all posts from API
router.get("/posts", (req, res) => {
  res.json({ posts });
});

// GET single post by ID
router.get("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const post = posts.find((p) => p.id === postId);
  
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.json({ post });
});

export default router;
