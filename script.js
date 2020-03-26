//////////
// FORM //
//////////

const openButton = document.getElementById('send');
const closeButton = document.getElementById('close-form-button');
const confirmButton = document.getElementById('confirm-form-button');

openButton.addEventListener('click', () => {
    confirmButton.style.display = 'initial'; /*contents*/
  });

closeButton.addEventListener('click', () => {
    confirmButton.style.display = 'none';
})

/////////////////
// FORM SELECT //
/////////////////

let customSelect, iCounter1, jCounter, selElmnt, aSelected, bItems, cChoice;
/* Look for any elements with the class "custom-select": */
customSelect = document.getElementsByClassName("custom-select");
for (iCounter1 = 0; iCounter1 < customSelect.length; iCounter1++) {
  selElmnt = customSelect[iCounter1].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  aSelected = document.createElement("DIV");
  aSelected.setAttribute("class", "select-selected");
  aSelected.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  customSelect[iCounter1].appendChild(aSelected);
  /* For each element, create a new DIV that will contain the option list: */
  bItems = document.createElement("DIV");
  bItems.setAttribute("class", "select-items select-hide");
  for (jCounter = 1; jCounter < selElmnt.length; jCounter++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    cChoice = document.createElement("DIV");
    cChoice.innerHTML = selElmnt.options[jCounter].innerHTML;
    cChoice.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        let ySame, iCounter2, kCounter, sWhich, hOption;
        sWhich = this.parentNode.parentNode.getElementsByTagName("select")[0];
        hOption = this.parentNode.previousSibling;
        for (iCounter2 = 0; iCounter2 < sWhich.length; iCounter2++) {
          if (sWhich.options[iCounter2].innerHTML == this.innerHTML) {
            sWhich.selectedIndex = iCounter2;
            hOption.innerHTML = this.innerHTML;
            ySame = this.parentNode.getElementsByClassName("same-as-selected");
            for (kCounter = 0; kCounter < ySame.length; kCounter++) {
                ySame[kCounter].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        hOption.click();
    });
    bItems.appendChild(cChoice);
  }
  customSelect[iCounter1].appendChild(bItems);
  aSelected.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  let xItems, ySelected, iCounter3, arrNo = [];
  xItems = document.getElementsByClassName("select-items");
  ySelected = document.getElementsByClassName("select-selected");
  for (iCounter3 = 0; iCounter3 < ySelected.length; iCounter3++) {
    if (elmnt == ySelected[iCounter3]) {
      arrNo.push(iCounter3)
    } else {
        ySelected[iCounter3].classList.remove("select-arrow-active");
    }
  }
  for (iCounter3 = 0; iCounter3 < xItems.length; iCounter3++) {
    if (arrNo.indexOf(iCounter3)) {
        xItems[iCounter3].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

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


for (let i = 0; i < buttonElement.length; i++) {
buttonElement[i].addEventListener(trigger2, (event) => {
    bluredBody('blur(0px)');
    acceptCookie('none');
  });}

  


// class
const containerTestimonial = document.getElementsByClassName('container-testimonial');
const testimonialBox = document.getElementsByClassName('testimonialBox');


///////////////////
// THEY TRUST US //
///////////////////



//buttonElement.addEventListener('click', acceptCookie('none','absolute','30%','10%','80vw'));








