document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    // Validate Email Format
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    // Handle Login Form Submission
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = loginForm.username.value.trim();
            const password = loginForm.password.value.trim();

            if (!username || !password) {
                alert("All fields are required!");
                return;
            }

            const storedUser = JSON.parse(localStorage.getItem(username));
            if (storedUser && storedUser.password === password) {
                alert("Login successful!");
                localStorage.setItem("loggedInUser", username);
                window.location.href = "recipes.html";
            } else {
                alert("Invalid username or password!");
            }
        });
    }

    // Handle Sign-Up Form Submission
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = signupForm.username.value.trim();
            const email = signupForm.email.value.trim();
            const password = signupForm.password.value.trim();

            if (!username || !email || !password) {
                alert("All fields are required!");
                return;
            }

            if (!validateEmail(email)) {
                alert("Please enter a valid email address!");
                return;
            }

            if (localStorage.getItem(username)) {
                alert("Username already exists! Please choose a different username.");
                return;
            }

            const user = { email, password };
            localStorage.setItem(username, JSON.stringify(user));
            alert("Sign-Up successful! Please login now.");
            window.location.href = "login.html";
        });
    }
});
