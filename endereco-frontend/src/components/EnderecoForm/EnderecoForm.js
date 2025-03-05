import React, { useState } from "react";
import axios from "axios";
import { salvarEnderecoDB, carregarEnderecosDB } from "../../App";
import "./EnderecoForm.css";

const EnderecoForm = ({ setError, carregarEnderecos }) => {
  const [cep, setCep] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cepRegex = /^\d{8}$/;
    if (!cepRegex.test(cep)) {
      setError("O CEP deve conter apenas números e ter 8 dígitos.");
      return;
    }

    try {
      const enderecosDB = await carregarEnderecosDB();
      const enderecoExistente = enderecosDB.find((endereco) => endereco.cep === cep);

      if (enderecoExistente) {
        setError("Este endereço já foi salvo.");
        return;
      }

      const response = await axios.get(`http://localhost:3000/enderecos/buscar?cep=${cep}`);
      const endereco = response.data;

      await salvarEnderecoDB(endereco);

      setCep("");
      carregarEnderecos();

      alert("Endereço salvo com sucesso!");
    } catch (error) {
      setError("Erro ao buscar ou salvar o endereço!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="CEP"
        className={cep && !/^\d{8}$/.test(cep) ? 'error' : ''}
      />
      <button type="submit">Salvar Endereço</button>
    </form>
  );
};

export default EnderecoForm;
