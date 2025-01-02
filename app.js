const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("BADARA SENE!");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
