const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsContainerEl = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;

  return ingredientEl;
});
console.log(elements);

ingredientsContainerEl.append(...elements);
ingredientsContainerEl.setAttribute('style', 'list-style-type:none;');
