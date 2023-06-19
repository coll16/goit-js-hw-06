const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('ingredients')

const listItems = ingredients.map((ingredient) => {
  const listItem = document.createElement('li')
  listItem.textContent = ingredients
  listItem.classList.add('item')
  return listItem
});
console.log(listItems)