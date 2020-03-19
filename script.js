////////////
// HEADER //
////////////



/////////
// NAV //
/////////



////////////////
// WHAT WE DO //
////////////////



////////////////
// OUR VALUES //
////////////////



///////////////////
// SOME PROJECTS //
///////////////////

// Déclaration des constantes pour le carousel-slide et les images
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Sélection des boutons 
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// On crée un compteur pour suivre l'image sur laquel on est dans le carousel
// on initialise le compteur à 1 car on commence à l'image 1
let counter = 1;

//On indique la largeur de l'image pour dire de combien de px on doit slider
// clientWidth permet de renvoyer la largeur originale de l'image
const size = carouselImages[0].clientWidth; // carouselImage est un tableau du coup on lui dit de prendre en référence la largeur de l'image 1

//Pour démarrer sur la première image et non le clone de la dernière
// on bouge de la largeur de l'image sur l'axe X
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Ajout des eventListener sur les boutons 
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length -1) {
        return; // cela empêche que lorsqu'on click beaucoup de fois de suite on se retrouve sans image
    }; //pas tout compris pour l'instant à quoi ça sert == Faire des tests
    carouselSlide.style.transition = "transform 0.4s ease-in-out"; //idem CSS transform
    counter ++; // à chaque fois qu'on click sur next on augmente de 1 pour dire qu'on avance
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; //on bouge de tant de px vers la gauche
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        return;
    };
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter --; // on décrémente car on veut aller dans l'autre sens
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

//Transition pour retourner sur notre image du début 
// c'est un eventListener qui se déclenche après avoir fini la translation
// Cela permet de faire un carousel qui reviens toujours au début 
carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none'; //tu ne fais pas de transition
        counter = carouselImages.length -2; // la le compteur revient au nombre d'image - les deux clones
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    };// pour dans un sens Prev

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none'; 
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    };
});

//////////
// FORM //
//////////



///////////////////
// THEY TRUST US //
///////////////////



//////////////
// ABOUT US //
//////////////



///////////////////
// MEET OUR TEAM //
///////////////////



////////////
// FOOTER //
////////////


