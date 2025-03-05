import React, { useEffect, useState } from "react";
import { openDB } from "idb";
import EnderecoForm from "./components/EnderecoForm/EnderecoForm";
import EnderecoList from "./components/EnderecoList/EnderecoList";
import axios from "axios";

const abrirDatabase = async () => {
  return await openDB("enderecosDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("enderecos")) {
        db.createObjectStore("enderecos", { keyPath: "cep" });
      }
    },
  });
};

export const carregarEnderecosDB = async () => {
  const db = await abrirDatabase();
  const enderecos = await db.getAll("enderecos");
  return enderecos;
};


export const salvarEnderecoDB = async (endereco) => {
  const db = await abrirDatabase();
  await db.put("enderecos", endereco);
};

const excluirEnderecoDB = async (cep) => {
  const db = await abrirDatabase();
  await db.delete("enderecos", cep);
};

function App() {
  const [enderecos, setEnderecos] = useState([]);
  const [error, setError] = useState(null);

  const carregarEnderecos = async (filtro = "") => {
    try {
      const enderecosDB = await carregarEnderecosDB();
      const enderecosFiltrados = enderecosDB.filter((endereco) => {
        return (
          endereco.cidade.toLowerCase().includes(filtro.toLowerCase()) ||
          endereco.bairro.toLowerCase().includes(filtro.toLowerCase()) ||
          endereco.logradouro.toLowerCase().includes(filtro.toLowerCase()) ||
          endereco.uf.toLowerCase().includes(filtro.toLowerCase())
        );
      });
      setEnderecos(enderecosFiltrados);
    } catch (error) {
      setError("Erro ao carregar endereços!");
      console.error("Erro ao carregar endereços:", error);
    }
  };

  const ordenarEnderecos = async (campo, ordem) => {
    if (!campo) {
      await carregarEnderecos();
      return;
    }

    try {
      const db = await abrirDatabase();
      const storedEnderecos = await db.getAll("enderecos");

      const response = await axios.post("http://localhost:3000/enderecos/ordenar", {
        enderecos: storedEnderecos,
        campo,
        ordem,
      });

      setEnderecos(response.data);
    } catch (error) {
      setError("Erro ao ordenar endereços!");
      console.error("Erro ao ordenar endereços:", error);
    }
  };

  const excluirEndereco = async (cep) => {
    try {
      await excluirEnderecoDB(cep); 
      carregarEnderecos();
    } catch (error) {
      setError("Erro ao excluir o endereço!");
      console.error("Erro ao excluir o endereço:", error);
    }
  };

  useEffect(() => {
    carregarEnderecos();
  }, []);

  return (
    <div className="App">
      <h1>Consulta de Endereços</h1>
      {error && (
        <div style={{ color: "#e57373", margin: "0", padding: "0" }}>
          <strong>{error}</strong>
        </div>
      )}
      <EnderecoForm setError={setError} carregarEnderecos={carregarEnderecos} />
      <EnderecoList
        enderecos={enderecos}
        ordenarEnderecos={ordenarEnderecos}
        carregarEnderecos={carregarEnderecos}
        excluirEndereco={excluirEndereco}
      />
    </div>
  );
}

export default App;
