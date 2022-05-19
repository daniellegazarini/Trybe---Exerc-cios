// Retornar o fatorial de 10

let number = 10;
let fatorial=1;

for (i=0; i<number; i+=1) {
  fatorial = fatorial*(number-i);
}
console.log(fatorial);