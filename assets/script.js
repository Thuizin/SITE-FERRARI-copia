// // MENU APARECER
// let container = document.getElementById("container");
// window.addEventListener('load', function() {
//     setTimeout(function() {
//     container.style.opacity = "1";
//     }, 2200);
// });

// ANIMAÇÃO MENU AO SCROLLAR
window.addEventListener('scroll', function(){
    let menu = document.getElementById("menu");
    let scrollThreshold = 0;
    let scrollPosition = window.scrollY;
    if(scrollPosition > scrollThreshold){
        menu.classList.add('scrolled');
    }else{
        menu.classList.remove('scrolled');
    }
});