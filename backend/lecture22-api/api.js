//promise is the methode we do it to help us deal with asyn operation
// asyn like api calls
app.get("/api/posts/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const response = await axios.delete(`${api_url}/posts/${id}`, req.body); // api call
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: "internal servar error", error: error });
  }
});
//   this line when it works with promise will see first this line
//       const response = await axios.delete(`${api_url}/posts/${id}`, req.body); // api call
// and contuios the other lines without waite to finsh it fsirst
