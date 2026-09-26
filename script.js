// ==================================================
// HAMBURGER MENU
// ==================================================

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}



// ==================================================
// MEMORY BOX
// ==================================================

const memoryBox = document.getElementById("memory-box");


if (memoryBox) {

    memoryBox.addEventListener("click", () => {

        memoryBox.classList.toggle("opened");

    });

}