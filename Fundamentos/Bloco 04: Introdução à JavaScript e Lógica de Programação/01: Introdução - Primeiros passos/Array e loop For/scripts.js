// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma=0;
// let maior = 5;

// for (i=0; i<numbers.length; i+=1){
//   console.log(numbers[i]); //1
//   soma = soma + numbers[i]; //2
// }

// console.log(soma); //2

// let media = soma/numbers.length; //3
// console.log(media); //3

// if (soma>20) {
//   console.log('Valor maior que 20');
// } else {
//   console.log('Valor menor que 20');
// } //4

// for (i=1; i<numbers.length; i+=1){
//   if (numbers[i]>maior) {
//     maior = numbers[i];
//   } else {
//     maior = maior;
//   }
// }
// console.log(maior); //5

// //6
// let quantidade = 0;

// for (i=0; i<numbers.length; i+=1) {
//   if (numbers[i]%2 === 1) {
//     quantidade += 1;
//   }
//   }
// if (quantidade>0){
//     console.log(quantidade);
//   } else {
//     console.log('nenhum valor ímpar encontrado');
//   }

//   //7

//   let menor = 5;  
//   for (i=1; i<numbers.length; i+=1){
//     if (numbers[i]<menor) {
//       menor = numbers[i];
//     } 
//   }
//   console.log(menor);  
  
//   //8
//   let array = [];
//   let n = 0;

//   for (i=0; i<25; i+=1) {
//     n=i+1;
//     array.push(n);
//   }
//   console.log(array);

//   //9
  
//   let vetor = [];
//   let m = 0;

//   for (i=0; i<25; i+=1) {
//     m=(i+1)/2;
//     vetor.push(m);
//   }
//   console.log(vetor);

//bônus
//1
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let aux =0;

// for (k=1; k<numbers.length; k+=1) { // num iterações
//   for(i=0; i<numbers.length-k; i+=1) { //vetor menos num iterações que ja fiz
//     if (numbers[i]>numbers[i+1]) {
//       aux = numbers[i];
//       numbers[i] = numbers[i+1];
//       numbers[i+1]=aux;
//     }    
//   }
// }
// console.log(numbers);

//2

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let aux =0;
// for (k=1; k<numbers.length; k+=1) { // num iterações
//   for(i=0; i<numbers.length-k; i+=1) { //vetor menos num iterações que ja fiz
//     if (numbers[i]<numbers[i+1]) {
//       aux = numbers[i];
//       numbers[i] = numbers[i+1];
//       numbers[i+1]=aux;
//     }    
//   }
// }
// console.log(numbers);

//3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoarray = [];
for (k=0; k<numbers.length; k+=1) { 
  if (k<numbers.length-1) {
  novoarray.push(numbers[k]*numbers[k+1]);
  } else {
  novoarray.push(numbers[k]*2);  
  }
  
}
console.log(novoarray);