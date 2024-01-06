const video1 = document.querySelector("#videos video");
video1.play();




// MENU APARECER
let menu = document.getElementById("menu");
window.addEventListener('load', function() {
    setTimeout(function() {
    menu.style.opacity = "1";
    }, 3000);
});

// LOGO FERRARI APARECER
let ferrari = document.getElementById("entrada");
ferrari.style.opacity = "0";
window.addEventListener('load', function() {
    this.setTimeout(function(){
        menu.style.opacity = "1";
    }, 3000);
});