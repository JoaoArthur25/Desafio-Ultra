const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function saque(valor) {
  let notas = [100, 50, 20, 10, 5, 2, 1];
  let resultado = {};

  for (let nota of notas) {
    if (valor >= nota) {
      resultado[nota] = Math.floor(valor / nota);
      valor %= nota;
    }
  }

  for (let nota of notas) {
    if (resultado[nota]) {
      if (nota === 1) {
        console.log(`${resultado[nota]} moeda(s) de ${nota}`);
      } else {
        console.log(`${resultado[nota]} nota(s) de ${nota}`);
      }
    }
  }
}

rl.question(
  "Digite o valor para saque no caixa eletrônico: ",
  (valorEntrada) => {
    let valor = parseInt(valorEntrada);
    if (!isNaN(valor) && valor > 0) {
      saque(valor);
    } else {
      console.log("Por favor, insira um valor inteiro positivo.");
    }
    rl.close();
  }
);
