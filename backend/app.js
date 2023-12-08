const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.get("/", (req, res) => {
  res.send("Olá mundo");
});

app.listen(3000, () => {
  console.log("App rodando na porta 3000");
});