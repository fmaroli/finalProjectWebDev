var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var story = $(".top");
    console.log(story);
    var slides = $(".gallery");
    var dots = $(".dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        story[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
        
    }
    story[slideIndex-1].style.display = "block";
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}