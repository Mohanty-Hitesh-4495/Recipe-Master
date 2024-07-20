// Check if a user is logged in and redirect if necessary
const checkAuthentication = () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        window.location.href = "login.html";
    }
};

// Handle Logout
const logout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
};

// Export functions for use in other scripts
export { checkAuthentication, logout };
