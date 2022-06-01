const btnSubmit = document.getElementById('submit');
const inputName = document.getElementById('input-name');

function getUserValue(event) {
  event.preventDefault();
  console.log(inputName.value);

}

btnSubmit.addEventListener('click', getUserValue);