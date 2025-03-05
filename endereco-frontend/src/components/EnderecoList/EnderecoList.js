import React from "react";
import "./EnderecoList.css";

const EnderecoList = ({ enderecos, ordenarEnderecos, carregarEnderecos, excluirEndereco }) => {
  const handleOrdenacao = (e) => {
    const valor = e.target.value;
    if (!valor) {
      ordenarEnderecos(null);
      return;
    }
    const [campo, ordem] = valor.split("-");
    ordenarEnderecos(campo, ordem);
  };

  const handleFiltroChange = (e) => {
    carregarEnderecos(e.target.value);
  };

  return (
    <div className="endereco-list">
      <h2>Endereços Salvos</h2>
      <div className="ordenacao">
        <strong>Ordenar por:</strong>
        <select onChange={handleOrdenacao} defaultValue="">
          <option value="">Selecione...</option>
          <option value="cidade-crescente">Cidade (Crescente)</option>
          <option value="cidade-decrescente">Cidade (Decrescente)</option>
          <option value="bairro-crescente">Bairro (Crescente)</option>
          <option value="bairro-decrescente">Bairro (Decrescente)</option>
          <option value="uf-crescente">Estado (Crescente)</option>
          <option value="uf-decrescente">Estado (Decrescente)</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          onChange={handleFiltroChange}
          placeholder="Endereço..."
        />
      </div>
      <ul>
        {enderecos.map((endereco) => (
          <li key={endereco.cep}>
            <strong>{endereco.logradouro}</strong>
            <br />
            {endereco.bairro} - {endereco.cidade} ({endereco.uf})
            <button className="excluir" onClick={() => excluirEndereco(endereco.cep)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnderecoList;
