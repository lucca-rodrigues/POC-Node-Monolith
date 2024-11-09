const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "hbs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/home", (req, res) => {
  res.render("home", {
    title: "Página Inicial",
    message: "Bem-vindo ao meu site lindo!",
  });
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
