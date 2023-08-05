const textInput = document.querySelector("#name-input")
console.log(textInput);

const nameOutput = document.querySelector("#name-output")
console.log(nameOutput);

textInput.addEventListener("input", (event) => {
    if (nameOutput !== "") {
        nameOutput.textContent = event.currentTarget.value
    }
    else if (nameOutput === "") {
        nameOutput.textContent = "Anonymous"
    }
    // else {
    //     nameOutput.textContent = "Anonymous"
    // } 
    
})