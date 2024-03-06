const express = require("express");
const cors = require("cors");
const router = require("./routes");

const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço: http://localhost:${PORT}`);
});
