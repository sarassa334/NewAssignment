import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// let posts = [
//   {
//     id: 1,
//     title: "Getting Started with JavaScript",
//     content:
//       "JavaScript is a versatile language used in both frontend and backend development.",
//     author: "John Doe",
//     date: "2025-05-04",
//   },
//   {
//     id: 2,
//     title: "Understanding Node.js",
//     content:
//       "Node.js allows you to run JavaScript on the server side, enabling full-stack development.",
//     author: "Jane Smith",
//     date: "2025-05-02",
//   },
//   {
//     id: 3,
//     title: "Intro to Express Framework",
//     content:
//       "Express makes it easier to build web APIs with Node.js using simple and powerful routing.",
//     author: " Justin noor",
//     date: "2025-04-30",
//   },
// ];

const db = new pg.Client({
  //شبكنا على الداتا بيس
  user: "postgres",
  host: "localhost",
  database: "blog",
  password: "karla123456",
  port: 5432,
});

db.connect() // عشان نتأكد اذا شبكنا صح ع الداتابيس
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection error:", err.message);
  });

// let lastId = 3;

//Read
app.get("/posts", async (req, res) => {
  // هسا كيف نكتب الكويريز queries
  try {
    const result = await db.query("SELECT * FROM posts ORDER BY id"); // blog هو اسم الجدول الي انشأته في الداتا بيس الي اسمها posts
    res.json(result.rows); // عشان ارجع الروز الي موجودين بالداتابيس
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/posts/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await db.query("SELECT * FROM posts WHERE id = $1", [id]); // لداتا passنعمل
    if (result.rows.length > 0) res.json(result.rows[0]);
    else res.status(404).json({ error: "Post Not Found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Create
app.post("/posts", async (req, res) => {
  const { title, content, author } = req.body;
  console.log(req.body);
  try {
    const result = await db.query(
      "INSERT INTO posts(title,content,author)VALUES($1,$2,$3) RETURNING *",
      [title, content, author]
    ); // الارقام تمثل القيم المبعوثه و الترتيب مهم لانه رح يمشي عليه
    res.send(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  res.status(201).json(newPost);
});

//update or edit

app.patch("/posts/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content, author } = req.body;

  try {
    const fields = [];
    const values = [];
    let count = 1;

    if (title) {
      fields.push(`title =$${count++}`);
      values.push(title);
    }

    if (content) {
      fields.push(`content =$${count++}`);
      values.push(content);
    }

    if (author) {
      fields.push(`author =$${count++}`);
      values.push(author);
    }

    values.push(id);

    const result = await db.query(
      `UPDATE posts SET ${fields.join(
        ", "
      )} , date =NOW() WHERE id = $${count} RETURNING *`,
      values
    );

    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).json({ error: ` post id ${id} Not Found` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/posts/:id", async (req, res) => {
  // we used put to edit all the value

  const id = parseInt(req.params.id);
  const { title, content, author } = req.body;

  // UPDATE posts
  // SET  title=?, content=?, author=?, date=?
  // WHERE id = 1;

  try {
    const result = await db.query(
      "UPDATE posts SET title = $1 ,content= $2 , author = $3 , date =NOW() WHERE id = $4 RETURNING *",
      [title, content, author, id]
    );

    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).json({ error: ` post id ${id} Not Found` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//delete

app.delete("/posts/:id", async (req, res) => {
  // DELETE FROM posts
  // 	WHERE <condition> RETURNING *;

  const id = parseInt(req.params.id);
  try {
    const result = await db.query(
      "DELETE FROM posts WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length > 0) {
      res.sendStatus(200);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log("API Server running correctly");
});
