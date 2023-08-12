function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const controls = document.querySelector('controls');
const inputNumberEl = document.querySelector('[type="number"]');
const renderBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const boxesEl = document.getElementById("boxes");


 inputNumberEl.addEventListener('input', toggleValue);
 renderBtnEl.addEventListener('click', () => {
   createBoxes(Number(inputNumberEl.value));
 });
 destroyBtnEl.addEventListener('click', destroyBoxes);

 let inputValue = 0;
 function toggleValue(event) {
   inputValue = event.currentTarget.value;
   console.log(inputValue);
 }

function createBoxes(amount) {
   let divArray = [];
   let sizeDefault = 30;
   for (let i = 0; i < amount; i += 1) {
     sizeDefault += 10;
     const divElement = document.createElement('div');
     divElement.classList = 'item';
     divElement.style.height = `${sizeDefault}px`;
     divElement.style.width = `${sizeDefault}px`;     divElement.style.marginRight = '30px';
     divElement.style.marginBottom = '30px';
     divElement.style.backgroundColor = getRandomHexColor();
     divArray.push(divElement);

   }
   return boxesEl.append(...divArray);
 }

function destroyBoxes() {
  inputNumberEl.value = '';
  return (boxesEl.innerHTML = '');
}