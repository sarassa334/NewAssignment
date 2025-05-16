import express from "express";
import path from "path";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import apiRoutes from "./routes/api.js";

const app = express();
const port = 8080;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Example route to render posts
app.get("/", (req, res) => {
  res.render("index", { title: "Blog", message: "Welcome to the blog!" });
});

// Use API routes from api.js
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
