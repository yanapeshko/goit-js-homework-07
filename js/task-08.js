// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит
// количество элементов в `input` и нажимает кнопку `Создать`, после чего
// рендерится коллекция. При нажатии на кнопку `Очистить`, коллекция элементов
// очищается.
// ```html
// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>
// ```

const refs = {
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  input: document.querySelector('input'),
  boxContainer: document.getElementById('boxes'),
};

let counter = 30;
// Создай функцию `createBoxes(amount)`, которая принимает 1 параметр `amount` -
// число. Функция создает столько `div`, сколько указано в `amount` и добавляет их
// в `div#boxes`.
const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    // Каждый созданный div:

    // - Имеет случайный rgb цвет фона
    // - Размеры самого первого div - 30px на 30px
    // - Каждый следующий div после первого, должен быть шире и выше предыдущего на
    //   10px
    const box = document.createElement('div');
    box.style.margin = '5px';
    box.style.backgroundColor = `rgb(
      ${Math.round(Math.random() * 244)},
      ${Math.round(Math.random() * 244)},
      ${Math.round(Math.random() * 244)})`;
    box.style.width = `${counter}px`;
    box.style.height = `${counter}px`;
    counter += 10;

    refs.boxContainer.appendChild(box);
  }
};

refs.renderBtn.addEventListener('click', () =>
  createBoxes(refs.input.valueAsNumber),
);
// Создай функцию `destroyBoxes()`, которая очищает `div#boxes`.
function destroyBoxes() {
  refs.boxContainer.querySelectorAll('div #boxes');
  refs.boxContainer.innerHTML = '';
  refs.input.value = '';
  counter = 30;
}

refs.destroyBtn.addEventListener('click', destroyBoxes);
