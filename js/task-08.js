const formEl = document.querySelector(".login-form")
console.log(formEl);

const UserData = {}



function handleSubmit (event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
       return console.log(alert("This form is not filled" ));
    }
    else {
        UserData.email = email.value,
        UserData.password = password.value
    }

    console.log(UserData);
    event.currentTarget.reset();
    
}


formEl.addEventListener("submit", handleSubmit);