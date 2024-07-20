import { checkAuthentication, logout } from './auth.js';

document.addEventListener("DOMContentLoaded", () => {
    checkAuthentication();

    const profileForm = document.getElementById("profile-form");
    const usernameField = document.getElementById("username");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");

    const loggedInUser = localStorage.getItem("loggedInUser");
    const userData = JSON.parse(localStorage.getItem(loggedInUser));

    usernameField.value = loggedInUser;
    emailField.value = userData.email;

    profileForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const updatedEmail = emailField.value.trim();
        const updatedPassword = passwordField.value.trim();

        if (!updatedEmail || !updatedPassword) {
            alert("All fields are required!");
            return;
        }

        const updatedUserData = { email: updatedEmail, password: updatedPassword };
        localStorage.setItem(loggedInUser, JSON.stringify(updatedUserData));

        alert("Profile updated successfully!");
    });

    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", logout);
    }
});
