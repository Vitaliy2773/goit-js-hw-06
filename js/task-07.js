const input = document.querySelector('#font-size-control')


const text = document.querySelector('#text')

function changeInput(e) {
    text.style.fontSize = e.currentTarget.value + "px";
}



input.addEventListener("input", changeInput);