
const numberOfItem = document.querySelectorAll('.item');
console.log(numberOfItem);

numberOfItem.forEach(item => {
    console.log(`Number of categories: ${item}`)
})

numberOfItem.forEach (item => item.textContent)


const titleOfItem = document.querySelectorAll('h2 > li');
console.log(titleOfItem)

titleOfItem.forEach(item => {
    console.log(item)
})

