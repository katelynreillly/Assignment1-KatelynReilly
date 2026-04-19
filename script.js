window.onload = function() {
    alert("✨ New projects have been added to my boards! Scroll to explore my latest marketing and tech work.");
};
const button = document.querySelector("#themeBtn");

button.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Light Mode";
    } else {
        button.textContent = "Dark Mode";
    }
});
