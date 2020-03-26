//////////
// FORM //
//////////

const openButton = document.getElementById('send');
const closeButton = document.getElementById('close-form-button');
const confirmButton = document.getElementById('confirm-form-button');

openButton.addEventListener('click', () => {
    confirmButton.style.display = 'initial';
  });

closeButton.addEventListener('click', () => {
    confirmButton.style.display = 'none';
})

/////////////////
// FORM SELECT //
/////////////////



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
cookies.addEventListener(trigger1, acceptCookie('block','absolute','30%','10%','80vw'));


btn.addEventListener(trigger2, function (event) {
    bluredBody('blur(0px)');
    acceptCookie('none');
  });

  


// class
const containerTestimonial = document.getElementsByClassName('container-testimonial');
const testimonialBox = document.getElementsByClassName('testimonialBox');



//buttonElement.addEventListener('click', acceptCookie('none','absolute','30%','10%','80vw'));








