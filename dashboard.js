document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".header .menu-toggle");

    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            sidebar.classList.toggle("open");
        });
    }
});
