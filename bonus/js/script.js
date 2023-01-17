/*
    STEPS:
    Milestone 0
        1. Costruire il markup statico del carosello in html
        2. Inserire un'immagine nel container
    Milestone 1
        1. Sostituire i contenuti statici con quelli dinamici usando javascript
        2. Costruire l'array di oggetti con i dati forniti
        3. Usare l'array costruito per popolare il carosello in modo dinamico usando javascript
            3A Cliccando sulle frecce cambierà l'immagine e i testi relativi
    Milestone 2
        1. Rendere infinito il ciclo delle immagini
*/
console.log("Collegamento javascript ok");

// Array dati
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Aquisizione elemento base
const subCarousel = document.getElementById("sub-carousel");

// Creazione dinamica delle slides
let appearSlide = 0;

for (let i = 0; i < images.length; i++) {
    subCarousel.innerHTML += `<div class="slides">
                                <img src="../${images[i].image}">

                                <div class="label">
                                    <h2>${images[i].title}</h2>

                                    <p>${images[i].text}</p>
                                </div>
                            </div>`;
}

let slidesGroup = document.querySelectorAll('.slides');
slidesGroup[appearSlide].classList.add('appear');

// Aggiunta miniature di lato
const sideDiv = document.querySelector(".side");

for (let i = 0; i < images.length; i++) {
    sideDiv.innerHTML += `<div class="side-slide">
                            <div class="dark-div"></div>
                            <img src="../${images[i].image}" class="side-pic">
                         </div>`;
}

let darkDiv = document.querySelectorAll('.dark-div');
darkDiv[appearSlide].classList.add('disappear');

let borderPic = document.querySelectorAll('.side-pic');
borderPic[appearSlide].classList.add('.border-select');

// Autoplay
const autoPlay = setInterval(buttonBehaviourForward, 3000);

// Pulsante avanti
const forwardButton = document.querySelector('.forward');

forwardButton.addEventListener('click', 
    function () {
        buttonBehaviourForward ();
    }
);

// Pulsante indietro
const backButton = document.querySelector('.back');

backButton.addEventListener('click', 
    function () {
        buttonBehaviourBackward();
    }
    
);


// Funzioni----------------------------------------------------------------
function buttonBehaviourForward () {
    if (appearSlide < slidesGroup.length - 1) {
        slidesGroup[appearSlide].classList.remove('appear');
        darkDiv[appearSlide].classList.remove('disappear');
        borderPic[appearSlide].classList.remove('border-select');
    
        appearSlide = appearSlide + 1;
    
        slidesGroup[appearSlide].classList.add('appear');
        darkDiv[appearSlide].classList.add('disappear');
        borderPic[appearSlide].classList.add('border-select');
    }
    else {
        slidesGroup[appearSlide].classList.remove('appear');
        darkDiv[appearSlide].classList.remove('disappear');
        borderPic[appearSlide].classList.remove('border-select');
    
        appearSlide = 0;
    
        slidesGroup[appearSlide].classList.add('appear');
        darkDiv[appearSlide].classList.add('disappear');
        borderPic[appearSlide].classList.add('border-select');
    }
}

function buttonBehaviourBackward () {
    if (appearSlide > 0) {
        slidesGroup[appearSlide].classList.remove('appear');
        darkDiv[appearSlide].classList.remove('disappear');
        borderPic[appearSlide].classList.remove('border-select');
    
        appearSlide = appearSlide - 1;
    
        slidesGroup[appearSlide].classList.add('appear');
        darkDiv[appearSlide].classList.add('disappear');
        borderPic[appearSlide].classList.add('border-select');
    }
    else if (appearSlide == 0) {
        slidesGroup[appearSlide].classList.remove('appear');
        darkDiv[appearSlide].classList.remove('disappear');
        borderPic[appearSlide].classList.remove('border-select');
    
        appearSlide = slidesGroup.length - 1;
    
        slidesGroup[appearSlide].classList.add('appear');
        darkDiv[appearSlide].classList.add('disappear');
        borderPic[appearSlide].classList.add('border-select');
    }
}