const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientContainerEl = document.querySelector('#ingredients');

const makeItems = items => {
  return items.map(item => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = item;
    return ingredientEl;
  });
};
const elements = makeItems(ingredients);
ingredientContainerEl.append(...elements);
// console.log(elements);
