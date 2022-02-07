// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на `1`.

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector('#value');
// - Создай переменную `counterValue` в которой будет хранится текущее значение
//   счетчика.
let counterValue = 0;
// - Создай функции `increment` и `decrement` для увеличения и уменьшения значения
//   счетчика
function increment() {
  counterValue += 1;
}
function decrement() {
  counterValue -= 1;
}
// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
incrementBtn.addEventListener('click', onIncrementChange);
decrementBtn.addEventListener('click', onDecrementChange);

function onIncrementChange() {
  increment();
  valueRef.textContent = counterValue;
}
function onDecrementChange() {
  decrement();
  valueRef.textContent = counterValue;
}
