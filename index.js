var slideIndex = 1;
document.addEventListener("DOMContentLoaded", function() {
showDivs(slideIndex);
startAutoSlide();
})

function plusDivs(n) {
  showDivs(slideIndex += n);
    resetAutoSlide(); // Reset the timer on manual navigation
}

function currentDiv(n) {
  showDivs(slideIndex = n);
    resetAutoSlide(); // Reset the timer on manual navigation
}

function showDivs(n) {
  var i;
  var img = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > img.length) 
    { 
        slideIndex = 1 
    }

  if (n < 1) 
    {
        slideIndex = img.length 
    }
    
    for (i = 0; i < img.length; i++) 
    {
        img[i].style.display = "none"; //working code
    }
    
    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    
    img[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dot-active";
}

var slideTimer;
function startAutoSlide() {
  slideTimer = setInterval(() => {
    plusDivs(1);
  }, 5000); // Change slide every 5 seconds
}

function resetAutoSlide() {
  clearInterval(slideTimer);
  startAutoSlide();
}