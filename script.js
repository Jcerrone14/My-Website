const button = document.getElementById("dark-mode-button");

function applyDarkMode(isDark) {
    document.body.classList.toggle("dark-mode", isDark);
}

const savedPreference = localStorage.getItem("dark-mode");
applyDarkMode(savedPreference === "true");

button.addEventListener("click", function() {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", isDark);
});