const video1 = document.querySelector("#videos video");
video1.play();



// LOGO FERRARI APARECER
let ferrari = document.getElementById("entrada");
ferrari.style.opacity = "0";
// window.addEventListener('load', function() {
//     this.setTimeout(function(){
//         menu.style.opacity = "1";
//     }, 3000);
// });
// MENU APARECER
let menu = document.getElementById("menu");
window.addEventListener('load', function() {
    setTimeout(function() {
    menu.style.opacity = "1";
    }, 3000);
});






for(let x = 0; x <= 1; x++){
    ferrari.style.opacity = "1";
}
for(x = 1; x <= 3; x++){
    ferrari.style.opacity = "0";
}