const list = document.querySelector('#categories');
const items = document.querySelectorAll('.item');
console.log(`В списке ${items.length} категории.`);

// const heading = items.firstElementChild;
// console.log(items.children);
// const items = document.querySelectorAll('.item');
Array.prototype.forEach.call(items, element => {
  const title = element.querySelector('h2').innerHTML;
  const itemsLength = element.querySelectorAll('li').length;
  console.log(`Категория: ${title}.
   Количество элементов: ${itemsLength}.`);
});
