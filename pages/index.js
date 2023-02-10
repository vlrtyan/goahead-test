let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = Array.from(document.querySelectorAll(".banner"));
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.animation= "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.animation= "display 4s infinite";
  slides[slideIndex - 1].style.display = "flex";
  setTimeout(showSlides, 4000);
}
