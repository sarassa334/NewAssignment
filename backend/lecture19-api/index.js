// saturday lecture 3/5/2025 (part 1 for the blog without api)

import express from "express";
import bodyparser from "body-parser";

const app = express();
const port = 8888;

let colors = [
  { id: 1, color: "Red", value: "#FF0" },
  { id: 2, color: "Green", value: "#00F" },
  { id: 3, color: "Blue", value: "#000" },
  { id: 4, color: "Yellow", value: "#FFF" },
  { id: 5, color: "Cyan", value: "#00F" },
  { id: 6, color: "Magenta", value: "#FF0" },
  { id: 7, color: "Black", value: "#000" },
  { id: 8, color: "White", value: "#FFF" },
  { id: 9, color: "Green", value: "#00F" },
];

app.use(bodyparser.urlencoded({ extended: true }));

//1 output : all colors object
app.get("/colors", (req, res) => {
  res.json(colors);
});

//2 output : random color
app.get("/random", (req, res) => {
  const randomColor = Math.floor(Math.random() * colors.length); // هاي كلها بترجعلي رقم عشوائي
  res.json(colors[randomColor]);
});

//3 output : specific color by id number
app.get("/colors/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const colorObj = colors.find((color) => color.id === id);
  res.json(colorObj);
});

//4 filtering
app.get("/filter", (req, res) => {
  const colorQ = req.query.color;
  const listOfFilteredColors = colors.filter((color) => color.color === colorQ);
  res.json(listOfFilteredColors);
});

//5 create a new Color
app.post("/colors", (req, res) => {
  const newColor = {
    id: colors.length + 1,
    color: req.body.color,
    value: req.body.value,
  };
  colors.push(newColor);
  res.status(200).json(newColor);
});

//6 edit (put)
app.put("/colors/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const updatedColor = {
    id: id,
    color: req.body.color,
    value: req.body.value,
  };

  const colorIndex = colors.findIndex((color) => color.id === id);

  colors[colorIndex] = updatedColor;
  res.json(updatedColor);
});

//7 edit (patch)
app.patch("/colors/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const colorIndex = colors.findIndex((color) => color.id === id);

  const colorObj = colors[colorIndex];
  const updatedColor = {
    id: id,
    color: req.body.color || colorObj.color,
    value: req.body.value || colorObj.value,
  };

  colors[colorIndex] = updatedColor;
  res.json(updatedColor);
});

//8 delete
app.delete("/colors/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const colorIndex = colors.findIndex((color) => color.id === id);

  if (colorIndex > -1) {
    colors.splice(colorIndex, 1);
    res.sendStatus(200);
  } else {
    res.status(404).json({ error: `Color id ${id} not found` });
  }
});

//9 delete All
app.delete("/all", (req, res) => {
  colors = [];
  res.sendStatus(200);
});

//server
app.listen(port, () => {
  console.log("success");
});

//notes
// Use res.json() when:
// You're building an API
// You want to send structured data (like arrays, objects)
// You want the client to parse and use the response programmatically

//================================================================================================================
// part 2












































