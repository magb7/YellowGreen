///////////////
// FOOTER //

const footerElem = document.getElementById('aboutUs');

function changeStyler(newColor,size,content) {
    footerElem.style.color = newColor;
    footerElem.style.fontSize = size;
    footerElem.innerHTML = content;
  };
  

  footerElem.addEventListener("mouseover", changeStyler('blue','2 rem', 'discover more !' ));
