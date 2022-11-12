window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle('down', window.scrollY > 0);
});

window.addEventListener("scroll", function() {
    let navmenu__menu = document.querySelector(".nav-menu__menu");
    navmenu__menu.classList.toggle('down', window.scrollY > 0);
});
