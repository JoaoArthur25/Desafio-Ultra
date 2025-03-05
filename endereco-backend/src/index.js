const express = require("express");
const cors = require("cors");
const enderecosRoutes = require("./routes/enderecos-routes");

const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(express.json()); 

app.use("/enderecos", enderecosRoutes);

app.get("/", (req, res) => {
  res.send("API para consulta de endereços via CEP funcionando!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
