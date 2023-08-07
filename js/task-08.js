const form = document.querySelector(".login-form")
console.log(form);




function handleSubmit (event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
       return console.log(alert("This form is not filled" ));
    }

    console.log(`Email: ${email.value}, password: ${password.value}`);
    event.currentTarget.reset();
    
}


form.addEventListener("submit", handleSubmit);