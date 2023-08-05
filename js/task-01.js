
const numberOfItem = document.querySelectorAll('.item');
console.log(numberOfItem);

numberOfItem.forEach(item => {
    console.log(`Number of categories: ${item}`)
})

numberOfItem.forEach (item => item.textContent)

const itemMenu = document.querySelectorAll('.item-animals')
console.log(itemMenu);
itemMenu.forEach(itemM => {
  console.log(itemM);
})
const titleOfItem = document.querySelectorAll('h2');
console.log(titleOfItem)

titleOfItem.forEach(item => {
    console.log(item)
})

itemMenu.prepend(titleOfItem)

