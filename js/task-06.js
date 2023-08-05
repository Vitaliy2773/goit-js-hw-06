const index = document.querySelector(".index.html")
console.log(index);

const input = document.querySelector("#validation-input")
console.log(input);

const lengthInput = document.querySelector('[data-length ="6"]')
console.log(lengthInput.dataset.length);



const handleInputFunction = (e) => {
    if (input.textContent.length <= lengthInput.dataset.length) {
        input.style.border-color(".valid")
    }

    else if (input.textContent.length > lengthInput.dataset.length) {
       input.classList.add(".invalid")
    }
   
}

input.addEventListener("blur", handleInputFunction)