const categories = document.querySelectorAll('.item');

console.log(`Categories: ${categories.length}`)

categories.forEach((category) => {
  const categoryName = category.querySelector('h2').textContent
  const categoryElements = category.querySelectorAll('li')

  console.log(`Category ${categoryName}:`,`Elements: ${categoryElements.length}`)
});
