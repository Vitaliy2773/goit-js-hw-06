const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// images.insertAdjacentHTML('beforend',<li><img></li>)

const imagesWrapper = document.querySelector(".gallery")

const itemImg1 = document.createElement("li")
// console.log(itemImg1);

const img1 = document.createElement("img")


const itemImg2 = document.createElement("li")
// console.log(itemImg2);

const img2 = document.createElement("img")


const itemImg3 = document.createElement("li")
// console.log(itemImg3);

const img3 = document.createElement("img")


img1.setAttribute("url",'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')

img1.setAttribute("alt", "White and Black Long Fur Cat");

img1.classList.add("img1")

img2.setAttribute("url",'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')

img2.setAttribute("alt", 'Orange and White Koi Fish Near Yellow Koi Fish')

img2.classList.add("img2")

img3.setAttribute("url",'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')

img3.setAttribute("alt", 'Group of Horses Running')

img3.classList.add("img3")

itemImg1.append(img1)
itemImg2.append(img2)
itemImg3.append(img3)
imagesWrapper.append(itemImg1,itemImg2,itemImg3)
// imagesWrapper.insertAdjacentHTML("afterbegin",itemImg1)
console.log(imagesWrapper)


