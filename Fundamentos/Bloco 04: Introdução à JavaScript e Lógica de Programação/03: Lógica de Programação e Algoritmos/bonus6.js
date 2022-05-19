let numero = 41;
let divisores = 1;

for (i=2; i<=numero; i+=1) {
  if(numero%i===0){
    divisores += 1;
  }
}

if (divisores===2){
  console.log('é primo');
} else {
  console.log('não é primo');
}

