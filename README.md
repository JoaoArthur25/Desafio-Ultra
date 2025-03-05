# Desafios de Desenvolvimento Web

Este repositório contém a implementação de dois desafios propostos para avaliação de habilidades de desenvolvimento web.

## Desafio 1: Lógica de Programação

### 1. Sequência de Fibonacci
Implementação que retorna os primeiros `n` números da sequência de Fibonacci.

**Exemplo de Entrada:**
```bash
n = 6
```
**Exemplo de Saída:**
```bash
[0, 1, 1, 2, 3, 5]
```

### 2. Implementação de Algoritmo de Busca Binária
Busca binária para encontrar o índice da primeira ocorrência de um número alvo em uma lista ordenada.

**Exemplo de Entrada:**
```bash
Lista: [5, 12, 18, 23, 45, 70, 89]
Alvo: 23
```
**Exemplo de Saída:**
```bash
3
```

### 3. Cálculo de Números Perfeitos
Verifica se um número é perfeito (igual à soma dos seus divisores positivos, excluindo ele mesmo).

**Exemplo de Entrada:**
```bash
n = 28
```
**Exemplo de Saída:**
```bash
True
```

### 4. Substring Palindrômica Mais Longa
Encontra a maior substring palindrômica dentro de uma string.

**Exemplo de Entrada:**
```bash
"babad"
```
**Exemplo de Saída:**
```bash
"bab" ou "aba"
```

### 5. Simulação de Saque em Caixa Eletrônico
Calcula a quantidade mínima de notas e moedas necessárias para um valor.

**Exemplo de Entrada:**
```bash
valor = 130
```
**Exemplo de Saída:**
```bash
1 nota de 100
1 nota de 20
1 nota de 10
```

## Desafio 2: Sistema Web para Consulta e Armazenamento de Endereços
Sistema web para consulta e armazenamento de endereços utilizando a API ViaCEP.

### Tecnologias Utilizadas
- Node.js
- Express.js
- Axios
- React.js
- IndexedDB

### Backend
Localizado na pasta `endereco-backend`.

**Rotas:**
- `GET /buscar`: Busca o endereço pelo CEP.
- `GET /`: Lista ou filtra endereços armazenados.
- `POST /ordenar`: Ordena a lista de endereços.

### Frontend
Localizado na pasta `endereco-frontend`.

Funcionalidades:
- Busca de endereços pelo CEP.
- Listagem de endereços armazenados.
- Filtro por logradouro, cidade, bairro e estado.
- Ordenação por cidade, bairro ou estado.

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/JoaoArthur25/Desafio-Ultra.git
```

2. Siga as instruções nos diretórios `endereco-backend` e `endereco-frontend` para instalação e execução.

## Licença
Este projeto foi desenvolvido por João Arthur.
