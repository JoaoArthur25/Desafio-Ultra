const express = require("express");
const axios = require("axios");
const router = express.Router();

let enderecos = [];

router.get("/buscar", async (req, res) => {
  const { cep } = req.query;

  if (!cep || cep.length !== 8) {
    return res.status(400).json({ message: "CEP inválido!" });
  }

  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (response.data.erro) {
      return res.status(404).json({ message: "CEP não encontrado!" });
    }

    const endereco = {
      cep,
      logradouro: response.data.logradouro,
      bairro: response.data.bairro,
      cidade: response.data.localidade,
      uf: response.data.uf,
    };

    enderecos.push(endereco);
    return res.status(200).json(endereco);
  } catch (error) {
    console.error("Erro ao buscar CEP:", error);
    return res.status(500).json({ message: "Erro ao buscar CEP!" });
  }
});

// Rota para filtrar endereços

router.get("/", (req, res) => {
  const { filtro } = req.query;

  if (!filtro) {
    return res.json(enderecos);
  }

  const enderecosFiltrados = enderecos.filter((endereco) => {
    return (
      endereco.logradouro.toLowerCase().includes(filtro.toLowerCase()) ||
      endereco.cidade.toLowerCase().includes(filtro.toLowerCase()) ||
      endereco.bairro.toLowerCase().includes(filtro.toLowerCase()) ||
      endereco.uf.toLowerCase().includes(filtro.toLowerCase())
    );
  });

  res.json(enderecosFiltrados);
});

//

router.post("/ordenar", (req, res) => {
  const { enderecos, campo, ordem } = req.body;

  if (!enderecos || enderecos.length === 0) {
    return res.status(400).json({ message: "Nenhum endereço encontrado!" });
  }

  let listaOrdenada = [...enderecos];

  if (campo && ordem) {
    listaOrdenada.sort((a, b) => {
      const valorA = a[campo] ?? "";
      const valorB = b[campo] ?? "";
      return ordem === "crescente" ? valorA.localeCompare(valorB) : valorB.localeCompare(valorA);
    });
  }

  res.json(listaOrdenada);
});

module.exports = router;
