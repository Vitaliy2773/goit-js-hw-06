
const numberOfItem = document.querySelectorAll('.item');


const numberOfItemsall = numberOfItem.length
console.log(`Number of categories: ${numberOfItemsall} `);


numberOfItem.forEach(element => {
    let title = element.querySelector("h2").textContent;

    let item = element.querySelectorAll("li")
    let itemElements = item.length
    console.log(`Category:${title}`);
    console.log(`Elements:${itemElements}`);
})



