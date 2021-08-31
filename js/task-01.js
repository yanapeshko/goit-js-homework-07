// const totalCategories = document.querySelectorAll('.item');
// console.log(`В списке ${totalCategories.length} категории.`);

// const categoriesArray = [...totalCategories]
//   .map(
//     categories => `Категория: ${categories.children[0].textContent}
// Количество элементов: ${categories.children[1].children.length}`
//   )
//   .join('\n');
// console.log(categoriesArray);

const list = document.querySelector('#categories');
const items = list.querySelectorAll('.item');
console.log(`В списке ${items.length} категории:`);
items.forEach(node => {
  const h2 = node.querySelector('h2');
  const nodeItems = node.querySelectorAll('li');
  console.log(
    ` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`
  );
});
