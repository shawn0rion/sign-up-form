let password1 = document.querySelector('#password1');
let password2 = document.querySelector('#password2');
let errorMsg = document.querySelector('#error');

function validatePassword() {

    if (password1.value != password2.value && password2.value != ""){
        password1.setCustomValidity("Passwords do not match.");
        password2.setCustomValidity("Passwords do not match.");
        errorMsg.style.cssText = "opacity: 1;"
    }
    else{
        password1.setCustomValidity("");
        password2.setCustomValidity("");
        errorMsg.style.cssText = "opacity: 0;"
    }
}

password1.addEventListener("change", validatePassword);
password2.addEventListener("change", validatePassword);