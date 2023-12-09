const express = require('express');
const app = express();
const cors = require('cors');

const Routes = require("./routes/index");

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use(express.json());

app.use('/', Routes);

app.listen(5000, () => {
  console.log("App rodando na porta 5000");
});