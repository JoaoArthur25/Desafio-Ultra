const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function numeroPerfeito(n) {
  let soma = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) soma += i;
  }
  return soma === n;
}

rl.question("Digite um número para verificar se é perfeito: ", (entrada) => {
  
  if (isNaN(entrada)) {
    console.log("Digite um número válido");
    rl.close();
    return;
  }

  let n = parseInt(entrada);
  console.log(numeroPerfeito(n) ? "True" : "False");
  rl.close();
});
