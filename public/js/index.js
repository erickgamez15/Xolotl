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

//Animación nav
window.sr = ScrollReveal()
sr.reveal('.nav',{
    duration: 750,
    origin: 'bottom',
    distance: '-50px'
});

//Animación nav-pages
window.sr = ScrollReveal()
sr.reveal('.nav-pages',{
    duration: 750,
    origin: 'bottom',
    distance: '-50px'
});

//Animaciones index
window.sr = ScrollReveal()
sr.reveal('.image', {
    duration: 2000,
    origin: 'left',
    distance: '-100px'
});

window.sr = ScrollReveal()
sr.reveal('.secondText', {
    duration: 2000,
    origin: 'rigth',
    distance: '-100px'
});  
    
window.sr = ScrollReveal()
sr.reveal('.thirdText', {
    duration: 2000,
    origin: 'rigth',
    distance: '-100px'
});

//Animaciones about
const cartas = document.querySelector('.cards')
console.log(cartas.children[0])
window.sr = ScrollReveal()
sr.reveal('.cards', {
    duration: 2000,
    origin: 'top',
    distance: '-100px'
});