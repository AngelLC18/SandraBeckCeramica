window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle('down', window.scrollY > 0);
});
$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){

          window.location.hash = hash;
        });
      } 
    });
  });

window.addEventListener("scroll", function() {
    let navmenu__menu = document.querySelector(".nav-menu__menu");
    navmenu__menu.classList.toggle('down', window.scrollY > 0);
});

window.addEventListener("scroll", () => {
    const toTop = document.querySelector(".to-top");
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
