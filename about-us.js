const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitbtn = document.getElementById("submitbtn");
const nameErr = document.getElementById("nameError");
const emailErr = document.getElementById("emailError");
const msgErr = document.getElementById("messageError");
form.addEventListener("submit", function(event) {
    nameErr.textContent = "";
    emailErr.textContent = "";
    msgErr.textContent = "";
    let isVaild = true;
    if (nameInput.value.trim() === "") {
        nameErr.textContent = "Please enter your name";
        isVaild = false
    }
    if (emailInput.value.trim() === "") {
        emailErr.textContent = "Please enter your email";
        isVaild = false
    } else if (!validateEmail(emailInput.value)) {
        emailErr.textContent = "Please enter a vaild email";
        isVaild = false
    }
    if (messageInput.value.trim() === "") {
        msgErr.textContent = "Please leave a message";
        isVaild = false
    }
    if (!isVaild) {
        event.preventDefault()
    }
});
function validateEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email))
}