///////////////
// FOOTER //

const main = document.getElementById('main');
const cookies = document.getElementById('cookies');
const buttonElement = document.getElementById('btn');
const trigger1 = 'load'; 
 const trigger2 = 'click'; 


console.log(cookies);

function bluredBody (filter) {
    main.style.filter = filter;


};


function acceptCookie (display,position,top,left,width) {
    cookies.style.display = display;
    cookies.style.position = position;
    cookies.style.top = top;
    cookies.style.left = left;
    cookies.style.width = width;
      
};


main.addEventListener(trigger1, bluredBody('blur(8px)'));
cookies.addEventListener(trigger1, acceptCookie('block', 'absolute', '30%', '10%', '80vw'));

//////////////////
// SLIDESHOW ///
////////////////


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



btn.addEventListener(trigger2, function (event) {
    bluredBody('blur(0px)');
    acceptCookie('none');
  });

  





///////////////////
// THEY TRUST US //
///////////////////

const profiles = document.getElementsByClassName("client");

const sayAppear = (profile) =>{
  const say = profile.querySelector('.say');
  say.style.transform = "translateY(0)";
};

for (let i =0; i < profiles.length; i++){
  profiles[i].addEventListener('mouseenter', () => {
    sayAppear(profiles[i]);
  });
};

const sayDisappear = (profile) =>{
  const say = profile.querySelector('.say');
  say.style.transform = "translateY(-200px)";
};

for (let i =0; i < profiles.length; i++){
  profiles[i].addEventListener('mouseleave', () => {
    sayDisappear(profiles[i]);
  });
};

//buttonElement.addEventListener('click', acceptCookie('none','absolute','30%','10%','80vw'));








