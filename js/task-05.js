const input = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

input.oninput = function () {
  if (input.value === '') {
    nameOutput.innerHTML = 'незнакомец';
  } else {
    nameOutput.innerHTML = input.value;
  }
};
