let numero = 35;
let maiorPrimo = 1;
let aux = 0;


 for(let k=1; k<=50; k+=1) {
   let prime = true;
    for (let i=2; i<k; i+=1) {

      if (k%i=== 0) {
        prime = false
      } 

      }
    if (prime){
    maiorprimo = k;
  }
  }

   

console.log (maiorprimo);
