//Toggle del modo responsive
const navToogle = document.querySelector(".navToggle")
const navMenu = document.querySelector(".navMenu")

navToogle.addEventListener("click", () =>{
    navMenu.classList.toggle("navMenuVisible")
})

//Cambio de color de la navBar
window.addEventListener('scroll', function(){
    let header = this.document.querySelector('header')
    let windowPosition = window.scrollY > 600
    header.classList.toggle('scrolling-active', windowPosition)
})

//Animaciones
window.sr = ScrollReveal();
    sr.reveal('.nav', {
        duration: 1000,
        origin: 'bottom',
        distance: '-100px'
    });

window.sr = ScrollReveal();
    sr.reveal('.image-section-two', {
        duration: 3000,
        origin: 'left',
        distance: '-100px'
    });

window.sr = ScrollReveal();
    sr.reveal('.info-section-two', {
        duration: 3000,
        origin: 'rigth',
        distance: '-100px'
    });  
    
window.sr = ScrollReveal();
    sr.reveal('.section-three', {
        duration: 3000,
        origin: 'rigth',
        distance: '-100px'
    });