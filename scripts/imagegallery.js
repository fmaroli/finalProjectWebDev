//IMAGE GALLERY - Used in topredwines.html and topwhitewines.html
//Inspired from tutorial on W3Schools - https://www.w3schools.com/howto/howto_js_slideshow.asp

//variable that stores current slide on the screen
var slideIndex = 1;
//call to show the first slide, they all begin as hidden
showSlides(slideIndex);

//this function will get called when user clicks on the Next, Previous button on the screen
//replaces slide with next/previous
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//this function will get called when user clicks on the dots on the bottom of gallery
//the parameter being received will be used to replace to the desired slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//This function processes all the change
function showSlides(n) {
    //store all stories in a variable, show only one
    var story = $(".top");
    //store all slides in a variable
    var slides = $(".gallery");
    //same with the dots
    var dots = $(".dot");
    //if n if bigger than the ammount of photos, go back to start
    if (n > slides.length) {
        slideIndex = 1;
    }
    //if n is 0, go to the last slide
    if (n < 1) {
        slideIndex = slides.length;
    }
    //hide all slides, stories and deactivate dots
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        story[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //in this next block we only show the desidered photo and story, and change the color of the dot
    story[slideIndex-1].style.display = "block";
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}