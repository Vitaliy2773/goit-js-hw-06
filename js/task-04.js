let counterValue = 0;

const value = document.querySelector("#value")


const buttonDecrement = document.querySelector('button[data-action="decrement"]');
console.log(buttonDecrement.dataset.action);

const buttonIncrement = document.querySelector('button[data-action="increment"]');
console.log(buttonIncrement.dataset.action);





const handleClickdecrement = () => {
    console.log(counterValue -= 1)
    value.innerHTML = counterValue
    
}

const handleClickincrement = () => {
    console.log(counterValue += 1)
    value.innerHTML = counterValue
}

buttonDecrement.addEventListener('click', handleClickdecrement)
buttonIncrement.addEventListener('click' ,handleClickincrement)