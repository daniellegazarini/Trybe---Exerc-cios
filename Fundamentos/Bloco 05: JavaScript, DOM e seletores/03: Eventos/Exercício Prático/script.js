function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//exercício 1
function createDaysOfTheMonth () {

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const listDays = document.querySelector('#days');
dezDaysList.forEach(function(value, i){
  newLi = document.createElement('li');
  newLi.className = 'day';
  newLi.innerHTML = dezDaysList[i];
  listDays.appendChild(newLi);
  
  if(dezDaysList[i]===24||dezDaysList[i]===31||dezDaysList[i]===25){
    newLi.classList.add('holiday');
  }
  if(dezDaysList[i]===4||dezDaysList[i]===11||dezDaysList[i]===18||dezDaysList[i]===25) {
    newLi.classList.add('friday');
  }
 
});
}

createDaysOfTheMonth();
//exercício 2

function createHollidayButton(buttonName){
  const divButton = document.querySelectorAll('div')[2];
  const newButton = document.createElement('button');
  newButton.innerText = 'Feriados';
  newButton.id = 'btn-holiday';
  divButton.appendChild(newButton);
}
createHollidayButton();

//exercício 3

// function buttonHoliday (white, originalColor) {
//   const button = 

// }
 

// let colored = false;
// const daysHolidays = document.querySelectorAll('.holiday');
// function changeColor () {
//   const daysHolidays = document.querySelectorAll('.holiday');
//   for (let i=0; i<daysHolidays.length; i+=1) {
//     if (colored === false) {
//       daysHolidays[i].style.backgroundColor = 'red';
//       colored = true;
//     } else {
//       daysHolidays[i].style.backgroundColor = 'rgb(238,238,238)';
//       colored = false;
//     }
//   }
// }



function changeColor () {
  const daysHolidays = document.querySelectorAll('.holiday');
   for (let i=0; i<daysHolidays.length; i+=1) {
    console.log(daysHolidays[i].style.backgroundColor);
    if(daysHolidays[i].style.backgroundColor === ''){
      daysHolidays[i].style.backgroundColor = 'red';
      console.log('vermelho');
    } else {
      daysHolidays[i].style.backgroundColor = 'rgb(238,238,238)';
      console.log ('branco');
    }
}
}

function addEventFeriados (){
  const holidayButton = document.querySelector('#btn-holiday');
  holidayButton.addEventListener('click', changeColor);
}
addEventFeriados();

//exercćio 4

function createFridayButton(buttonName){
  const divButton = document.querySelector('.buttons-container');
  const newButton2 = document.createElement('button');
  newButton2.innerHTML = buttonName;
  newButton2.id = 'btn-friday';
  divButton.appendChild(newButton2);
}
createFridayButton('Sexta-feira');

//exercício 5
//exercícío 6

function dayMouseOver() {
  let days = document.querySelectorAll('.day');
  for (let day of days){
  day.addEventListener('mouseover', function(event) {
    day.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
    console.log(event.target);
    console.log(day);
  })}
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver();
dayMouseOut();
