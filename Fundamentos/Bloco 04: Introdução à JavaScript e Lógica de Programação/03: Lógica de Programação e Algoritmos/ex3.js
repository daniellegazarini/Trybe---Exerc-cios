let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestword = array[0];
let smallestword = array[0];

for (i=0; i<array.length; i+=1) {
  if(array[i].length>biggestword.length) {
    biggestword = array[i]
  }
  }
  
  for (i=0; i<array.length; i+=1) {
    if(array[i].length<smallestword.length) {
      smallestword = array[i]
    }
    }

console.log(biggestword);
console.log(smallestword);


    