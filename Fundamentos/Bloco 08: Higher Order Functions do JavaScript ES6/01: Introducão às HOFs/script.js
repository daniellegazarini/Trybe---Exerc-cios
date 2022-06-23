// exercício 1 
const newEmployees = () => {
  const employees = {
    id1: id('Pedro Guerra'),
    id2: id('Luiza Drumond'), 
    id3: id('Carla Paiva'), 
  }
  return employees;
};

const id = (nomeCompleto) => {
  const nameArray = nomeCompleto.toLowerCase().split(' ');
  let email = `${nameArray[0]}_${nameArray[1]}@trybe.com`;
  return { nomeCompleto, email };
}

console.log(newEmployees());

// exercício 2

const sorteio = (aposta, func) => {
 let numSorteado = Math.floor(Math.random()*5 + 1);
 return func(aposta, numSorteado);
}

const checaNum = (aposta, numSorteado) => {
  if (aposta === numSorteado) {
    return 'Parabéns, você ganhou';
  } else {
    return 'Tente novamente';
  } 
}

// exercício 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correcao = (gabarito, resposta, func) => {
  return func(gabarito, resposta);
}

const pontuacao = (gabarito, resposta) => {
  let count = 0;
  for (let i=0; i<gabarito.length ; i+=1) {
    if (gabarito[i] === resposta[i]) {
      count += 1;
    } else {
      if (gabarito[i] !== resposta[i] && resposta[i] !== 'N.A'){
        count -= 0.5;
      }
    }
  }
  return count;
}

console.log(correcao(RIGHT_ANSWERS, STUDENT_ANSWERS, pontuacao));