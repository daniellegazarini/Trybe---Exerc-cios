let word = 'tryber';
let letters;
let result = '';


for (i=word.length; i>=1; i-=1) {
  letters = word.slice(i-1,i);
  result = result.concat(letters);
 
}

console.log(result);