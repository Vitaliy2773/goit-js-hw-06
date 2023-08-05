const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngridients = document.querySelector("#ingredients")
console.log(listIngridients);

const potatoesItem = document.createElement("li")
const mushroomsItem = document.createElement("li")
const garlicItem = document.createElement("li")
const tomatosItem = document.createElement("li")
const herbsItem = document.createElement("li")
const condimetsItem = document.createElement("li")

const wrapperItem = ingredients.forEach(ingredientsItem => 
  console.log(ingredients)
)

potatoesItem.textContent = 'Potatoes'
potatoesItem.classList.add('item')
console.log(potatoesItem);
mushroomsItem.textContent = 'Mushrooms'
mushroomsItem.classList.add('item')
console.log(mushroomsItem);
garlicItem.textContent = 'Garlic'
garlicItem.classList.add('item')
console.log(garlicItem);
tomatosItem.textContent = 'Tomatos'
tomatosItem.classList.add('item')
console.log(tomatosItem);
herbsItem.textContent = 'Herbs'
herbsItem.classList.add('item')
console.log(herbsItem);
condimetsItem.textContent = 'Condiments'
condimetsItem.classList.add('item')
console.log(condimetsItem);

listIngridients.append(potatoesItem, mushroomsItem, garlicItem, tomatosItem, herbsItem, condimetsItem)
console.log(listIngridients);




