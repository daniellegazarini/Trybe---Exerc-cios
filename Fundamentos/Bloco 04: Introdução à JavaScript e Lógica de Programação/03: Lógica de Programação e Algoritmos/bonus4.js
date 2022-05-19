
let n = 5;
let linha = '';
let meioColuna = (n+1)/2;
let colunaDireita = meioColuna;
let colunaEsquerda = meioColuna;

for (let iLinha = 0; iLinha <= meioColuna; iLinha += 1) {
  for (let iColuna = 0; iColuna <= n; iColuna += 1) {
    if (iColuna > colunaEsquerda && iColuna < colunaDireita) {
      linha = linha + '*';
    } else {
      linha = linha+ ' ';
    }
  }
  console.log(linha);
  linha = '';
  colunaDireita += 1;
  colunaEsquerda -= 1;
};
