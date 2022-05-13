const custo = 100;
const venda = 200;
let lucro = venda - 1.2*custo; 

if (venda<=0 || custo<=0){
  console.log("erro");
  } else {
  console.log(lucro);
  }
