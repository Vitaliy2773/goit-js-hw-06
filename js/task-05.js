const textInput = document.querySelector("#name-input")


const nameOutput = document.querySelector("#name-output")



 const getInputForm = ({ currentTarget }) =>
  (nameOutput.textContent =
     currentTarget.value !== ''
       ? currentTarget.value
       : 'Anonymous');

 textInput.addEventListener('input', getInputForm);