
let n = 5;
let linha = '';
let posicaoColuna = n;

for (let iLinha = 0; iLinha < n; iLinha += 1) {
  
  for (let iColuna = 0; iColuna <= n; iColuna += 1) {
    if (iColuna < posicaoColuna) {
      linha = linha + ' ';
    } else {
      linha = linha+ '*';
    }
  }
  console.log(linha);
  linha = '';
  posicaoColuna -= 1;
  console.log(posicaoColuna);
};