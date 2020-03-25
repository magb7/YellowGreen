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

const carouselSlides = document.querySelectorAll('.slide-item');

let currentSlide = 0;


const nextSlide = () => {
    console.log('next');
    goToSlide(currentSlide + 1);
};

const previousSlide = () => {
    console.log('previous');
    goToSlide(currentSlide - 1);
};

const goToSlide = (n) => {
    carouselSlides[currentSlide].className = 'slide-item';
    currentSlide = (n + carouselSlides.length) % carouselSlides.length;
    carouselSlides[currentSlide].className = 'slide-item showing';
};

const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

prevBtn.addEventListener('click', () => {
    previousSlide();
});

nextBtn.addEventListener('click', () => {
    nextSlide();
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


