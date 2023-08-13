function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnChangeColor = document.querySelector(".change-color");

const spanColorValue = document.querySelector("span")


btnChangeColor.addEventListener('click', (e) => {
  document.body.style.backgroundColor = getRandomHexColor();

 spanColorValue.textContent = document.body.style.backgroundColor
 })

