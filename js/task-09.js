function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const widget = document.querySelector(".widget");
console.log(widget);

const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.style.backgroundcolor = "red"

// btnChangeColor.addEventListener("click", getRandomHexColor);