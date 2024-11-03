const registrationForm = document.querySelector("#registrationForm");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const fullNameError= document.querySelector("#fullNameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

const validateFullName = () => {
    if (fullName.value.trim() === "") {
        fullNameError.textContent = "Full Name is required";
        return false;
    }
    fullNameError.textContent = "";
    return true;
};

const validateEmail = () => {
    if (email.value.trim() === "") {
        emailError.textContent = "email is required";
        return false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = "Email is invalid";
        return false;
    }
    emailError.textContent = "";
    return true;
}

const validatePassword = () => {
    if (password.value.length === "") {
        passwordError.textContent = "password is required";
        return false;
    } else if (password.value.length < 5) {
        passwordError.textContent = "password is too weak";
        return false;
    } passwordError.textContent = "";
    return true;
}

function validateForm() {
    const fuVallidation = validateFullName();
    const emailValidation = validateEmail();
    const passwoardValidation = validatePassword();
}

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (validateForm()) {
        alert("Congratulation! registration successful");
        registrationForm.reset();
    }
    else {
        console.log("Please fill all fields");
    }
});

fullName.addEventListener("input", validateFullName)
email.addEventListener("input", validateEmail)
password.addEventListener("input", validatePassword)