const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ehPalindromo(s) {
  return s === s.split("").reverse().join("");
}

function maiorSubstringPalindromica(str) {
  let maior = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let substr = str.substring(i, j);
      if (ehPalindromo(substr) && substr.length > maior.length) {
        maior = substr;
      }
    }
  }
  return maior;
}

rl.question(
  "Digite a string para encontrar a maior substring palindrômica: ",
  (stringEntrada) => {
    console.log(
      `Maior substring palindrômica: ${maiorSubstringPalindromica(
        stringEntrada
      )}`
    );
    rl.close();
  }
);
