
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    if (username.length < 3) {
        loginErrorMsg.style.opacity = 1;
        window.location.reload();
    } else {
        alert("You have successfully logged in.");
    }
})