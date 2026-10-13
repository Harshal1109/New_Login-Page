
document.getElementById("loginForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");

        if (email.trim() !== "" && password.length >= 6) {
            message.textContent =
                "Form validated! Backend login is not connected.";
            message.style.color = "green";
        } else {
            message.textContent =
                "Enter a valid email and password of at least 6 characters.";
            message.style.color = "red";
        }
    });
