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

//Animaciones index
window.sr = ScrollReveal();
    sr.reveal('.nav', {
        duration: 1000,
        origin: 'bottom',
        distance: '-100px'
    });

//Animaciones about
const cartas = document.querySelector('.cartas');
console.log(cartas.children[0])
window.sr = ScrollReveal()
sr.reveal('.cartas', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'
});
    
//Animaciones en JS servicios / services
window.sr = ScrollReveal();
sr.reveal('.container-services', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'
});