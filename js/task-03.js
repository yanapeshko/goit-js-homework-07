const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Используй массив объектов `images` для создания тегов `img` вложенных в `li`.
// Для создания разметки используй шаблонные строки и `insertAdjacentHTML()`.

const makeImagesMarkup = image => {
  const { url, alt } = image;

  return `
  <li style='display:flex; flex-direction: row; margin:10px; width: 30%'>
  <img src = '${url}' alt = '${alt}' style = 'display:block; width: 100%;'>
  </li>
  `;
};

const imageEl = document.querySelector('#gallery');
imageEl.style.display = 'flex';
const makeImageRows = images.map(makeImagesMarkup).join('');

imageEl.insertAdjacentHTML('beforeend', makeImageRows);