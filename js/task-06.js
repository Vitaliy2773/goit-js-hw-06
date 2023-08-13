

const input = document.querySelector("#validation-input")


 function onBlur(event) {
   const inputDataLength = Number(input.dataset.length);
   const inputValueLength = Number(input.value.trim().length);

   if (inputValueLength === inputDataLength) {
     input.classList.add('valid');
     input.classList.remove('invalid');
   }

   if (inputValueLength !== inputDataLength && inputValueLength !== 0) {
    input.classList.add('invalid');
   }
 }



input.addEventListener("blur", onBlur)