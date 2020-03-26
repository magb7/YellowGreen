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

let customSelect, iSelect1, jSelect, selElmnt, a, b, cChoice;
/* Look for any elements with the class "custom-select": */
customSelect = document.getElementsByClassName("custom-select");
for (iSelect1 = 0; iSelect1 < customSelect.length; iSelect1++) {
  selElmnt = customSelect[iSelect1].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  customSelect[iSelect1].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (jSelect = 1; jSelect < selElmnt.length; jSelect++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    cChoice = document.createElement("DIV");
    cChoice.innerHTML = selElmnt.options[jSelect].innerHTML;
    cChoice.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        let y, iSelect2, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (iSelect2 = 0; iSelect2 < s.length; iSelect2++) {
          if (s.options[iSelect2].innerHTML == this.innerHTML) {
            s.selectedIndex = iSelect2;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(cChoice);
  }
  customSelect[iSelect1].appendChild(b);
  a.addEventListener("click", function(e) {
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
  let x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
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








