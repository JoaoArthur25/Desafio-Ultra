# Endereco Backend API

Este projeto é o backend para o sistema de consulta e armazenamento de endereços, utilizando Node.js, Express e a API ViaCEP.

## Tecnologias Utilizadas
- Node.js
- Express.js
- Axios

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/JoaoArthur25/Desafio-Ultra.git
   ```

2. Navegue até a pasta do backend:
   ```bash
   cd Desafio-Dev/endereco-backend
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## Uso

### Inicializando o servidor

```bash
npm start
```

O servidor será iniciado na porta **3000**.

### Rotas

#### 1. Buscar Endereço por CEP
**GET /buscar**

Consulta o endereço pelo CEP fornecido através da API ViaCEP e armazena o resultado na memória.

**Parâmetros:**
- `cep`: CEP a ser consultado (obrigatório, 8 dígitos)

**Exemplo de Requisição:**
```bash
GET /buscar?cep=01001000
```

**Respostas:**
- `200`: Endereço encontrado
- `400`: CEP inválido
- `404`: CEP não encontrado
- `500`: Erro interno

#### 2. Listar ou Filtrar Endereços
**GET /**

Retorna todos os endereços armazenados ou filtra por logradouro, cidade, bairro ou estado (UF).

**Parâmetros de Query (Opcional):**
- `filtro`: Termo para filtrar os endereços

**Exemplo de Requisição:**
```bash
GET /?filtro=São Paulo
```

**Respostas:**
- `200`: Lista de endereços

#### 3. Ordenar Endereços
**POST /ordenar**

Ordena a lista de endereços conforme o campo e a ordem fornecidos.

**Body:**
```json
{
  "enderecos": [lista de endereços],
  "campo": "cidade", 
  "ordem": "crescente" // ou "decrescente"
}
```

**Respostas:**
- `200`: Lista ordenada
- `400`: Nenhum endereço encontrado
