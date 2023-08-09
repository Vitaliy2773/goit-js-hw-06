const input = document.querySelector('#font-size-control')
console.log(input);

const text = document.querySelector('#text')
console.log(text);

input.addEventListener("input", changeInput);

function changeInput(e) {
    span.style.fontsize = e.currentTarget.value + "px";
}