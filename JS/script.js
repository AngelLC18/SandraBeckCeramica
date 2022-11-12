window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle('down', window.scrollY > 0);
});