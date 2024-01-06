const video1 = document.querySelector("#videos video");
video1.play();



// MENU APARECER
let menu = document.getElementById("menu");
window.addEventListener('load', function() {
    setTimeout(function() {
    menu.style.opacity = "1";
    }, 2000);
});