///////////////
// FOOTER //

const main = document.getElementById('main');
const cookies = document.getElementById('cookies');
const buttonElement = document.getElementsByClassName('btn');
const trigger1 = 'load'; 
 const trigger2 = 'click';


console.log(cookies);

 bluredBody = (filter) => {
    main.style.filter = filter;


};


 acceptCookie = (display,position,top,left,width) => {
    cookies.style.display = display;
    cookies.style.position = position;
    cookies.style.top = top;
    cookies.style.left = left;
    cookies.style.width = width;     
};


main.addEventListener(trigger1, bluredBody('blur(8px)'));
cookies.addEventListener(trigger1, acceptCookie('block','fixed','6%','0%','80vw'));
//cookies.addEventListener(trigger1, acceptCookie('block','absolute','3%','10%','80vw'));

for (let i = 0; i < buttonElement.length; i++) {
buttonElement[i].addEventListener(trigger2, (event) => {
    bluredBody('blur(0px)');
    acceptCookie('none');
  });}

  


// class
const containerTestimonial = document.getElementsByClassName('container-testimonial');
const testimonialBox = document.getElementsByClassName('testimonialBox');



//buttonElement.addEventListener('click', acceptCookie('none','absolute','30%','10%','80vw'));








