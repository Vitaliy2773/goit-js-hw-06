let counterValue = 0;

const value = document.querySelector("#value")


const buttonDecrement = document.querySelector('button[data-action="decrement"]');


const buttonIncrement = document.querySelector('button[data-action="increment"]');






const handleClickdecrement = () => {
    counterValue -= 1
    value.innerHTML = counterValue
    
}

const handleClickincrement = () => {
   counterValue += 1
    value.innerHTML = counterValue
}

buttonDecrement.addEventListener('click', handleClickdecrement)
buttonIncrement.addEventListener('click' ,handleClickincrement)