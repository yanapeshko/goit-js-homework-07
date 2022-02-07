// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.

// ```html
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// ```

// - Сколько символов должно быть в инпуте, указывается в его атрибуте
//   `data-length`.

// Для добавления стилей, используй CSS-классы `valid` и `invalid`.
const input = document.querySelector('#validation-input');
// - Если введено подходящее количество, то `border` инпута становится зеленым,
//   если неправильное - красным.

input.addEventListener('blur', () => {
  if (input.value.length === 6) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});