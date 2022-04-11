//Toggle del modo responsive
const navToogle = document.querySelector(".navToggle")
const navMenu = document.querySelector(".navMenu")

navToogle.addEventListener("click", () =>{
    navMenu.classList.toggle("navMenuVisible")
})

//Animaciones en JS

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


//Animaciones en JS nosotros / about

const cartas = document.querySelector('.cartas');
console.log(cartas.children[0]);

window.sr = ScrollReveal();
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

//Animaciones en JS FAQ 

