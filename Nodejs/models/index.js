const express = require("express");
const app = express();
const PORT = 4000 || 3000;

app.get("/", (req, res) => {
  res.send("Hello i am Fanendra Choudhary");
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
