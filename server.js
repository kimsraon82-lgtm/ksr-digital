const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// កំណត់ static files ទៅកាន់ folder public
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// បើក index.html សម្រាប់គ្រប់ request
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
