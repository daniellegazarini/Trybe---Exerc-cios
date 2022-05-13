let salarioBruto = 3000;
let salarioLiquido = null;
let salario = null;

if (salarioBruto>=0 && salarioBruto<= 1556.94) {
  salarioLiquido = salarioBruto*(1-0.08);
} else {
  if (salarioBruto>1556.94 && salarioBruto<= 2594.92) {
    salarioLiquido = salarioBruto*(1-0.09);
  } else {
    if (salarioBruto>2592.92 && salarioBruto<= 5189.82) {
      salarioLiquido = salarioBruto*(1-0.11);
    } else {
      salarioLiquido = salarioBruto - 570.88;
    }
  }
}

if (salarioLiquido>=0 && salarioLiquido<=1903.98) {
  salarioLiquido = salarioLiquido;
} else {
  if (salarioLiquido>1903.98 && salarioLiquido<=2826.65) {
    salarioLiquido = salarioLiquido*(1-0.075)+142.80;
  } else {
    if (salarioLiquido>2826.65 && salarioLiquido<=3751.05) {
      salarioLiquido = salarioLiquido*(1-0.15)+354,84;
    } else {
      if (salarioLiquido>3751.05 && salarioLiquido<=4664.68) {
        salarioLiquido = salarioLiquido*(1-0.225)+636.13;
      } else {
        salarioLiquido = salarioLiquido*(1-0.275)+869.36;
      }
    }
  }
}

console.log(salarioLiquido);