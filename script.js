<<<<<<< HEAD
////////////
// HEADER //
////////////



/////////
// NAV //
/////////

//const navSlide = () => {
    //const burger = document.getElementsByClassName('.burger');
    //const nav = document.getElementsByClassName('.ulheader');

    //burger.addEventListener('click', () => {
        //nav.classList.toggle('nav-active');
    //});
//}

//navSlide();

=======
///////////////
// FOOTER //
>>>>>>> 0cde0385d9908bfbb9511885914a0a382d2bc881

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

  




//buttonElement.addEventListener('click', acceptCookie('none','absolute','30%','10%','80vw'));








