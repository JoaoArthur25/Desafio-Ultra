const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fibonacci(n) {
  let seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.slice(0, n);
}

rl.question(
  "Digite o número de termos da sequência de Fibonacci: ",
  (entrada) => {
    let n = parseInt(entrada);
    if (isNaN(n) || n <= 0) {
      console.log("Por favor, insira um número inteiro positivo.");
    } else {
      console.log(fibonacci(n));
    }
    rl.close();
  }
);
