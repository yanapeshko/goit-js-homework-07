const inputVal = document.getElementById('validation-input');

const totalLenght = inputVal.getAttribute('data-length');
const intTotallenght = parseInt(totalLenght, 10);

inputVal.oninput = function () {
  if (inputVal.value.length === intTotallenght) {
    inputVal.classList.remove('invalid');
    inputVal.classList.add('valid');
  }
  if (inputVal.value.length === 0) {
    inputVal.classList.remove('valid');
    inputVal.classList.remove('invalid');
  }
  if (inputVal.value.length !== intTotallenght && inputVal.value.length !== 0) {
    inputVal.classList.add('invalid');
  }
};
