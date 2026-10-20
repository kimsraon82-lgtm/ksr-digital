const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// កំណត់ឱ្យ Express ស្គាល់ Static files ក្នុង folder public
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// កំណត់ទំព័រដើមឱ្យបើក index.html ជានិច្ច
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
