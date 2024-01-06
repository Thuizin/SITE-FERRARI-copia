// LOGO FERRARI APARECER
let ferrari = document.getElementById("entrada");
ferrari.style.opacity = "0";
// window.addEventListener('load', function() {
//     this.setTimeout(function(){
//         menu.style.opacity = "1";
//     }, 3000);
// });

// for(let x = 0; x <= 10; x++){
//     ferrari.style.opacity = "1";
// }
// for(x = 10; x <= 20; x++){
//     ferrari.style.opacity = "0";
// }


// MENU APARECER
let menu = document.getElementById("menu");
window.addEventListener('load', function() {
    setTimeout(function() {
    menu.style.opacity = "1";
    }, 3000);
});







