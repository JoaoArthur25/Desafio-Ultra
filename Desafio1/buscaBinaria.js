const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function buscaBinaria(lista, alvo) {
  let esquerda = 0;
  let direita = lista.length - 1;
  while (esquerda <= direita) {
    let meio = Math.floor((esquerda + direita) / 2);
    if (lista[meio] === alvo) return meio;
    if (lista[meio] < alvo) esquerda = meio + 1;
    else direita = meio - 1;
  }
  return -1;
}

rl.question(
  "Digite a lista ordenada para busca binária (ex: 5,12,18,23): ",
  (listaEntrada) => {
    let lista = listaEntrada.split(",").map(Number);
    rl.question("Digite o número alvo para busca binária: ", (alvoEntrada) => {
      let alvo = parseInt(alvoEntrada);
      console.log(`Índice encontrado: ${buscaBinaria(lista, alvo)}`);
      rl.close();
    });
  }
);
