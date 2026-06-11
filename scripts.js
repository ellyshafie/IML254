let slideIndex = 0;
function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  if (slides.length === 0) return; // skip if no slideshow
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}

function plusSlides(n) {
  slideIndex += n - 1;
  showSlides();
}

let currentIndex = 0;
let images = [];

function initLightbox() {
images = Array.from(document.querySelectorAll('.gallery img'));
if (images.length === 0) return;
images.forEach((img, index) => {
img.addEventListener('click', () => openLightbox(index));
});
}

function openLightbox(index) {
currentIndex = index;
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
if (lightbox && lightboxImg) {
lightbox.style.display = "block";
lightboxImg.src = images[currentIndex].src;
}
}

function closeLightbox() {
const lightbox = document.getElementById("lightbox");
if (lightbox) lightbox.style.display = "none";
}

function changeImage(direction) {
currentIndex += direction;
if (currentIndex < 0) currentIndex = images.length - 1;
if (currentIndex >= images.length) currentIndex = 0;
const lightboxImg = document.getElementById("lightbox-img");
if (lightboxImg) lightboxImg.src = images[currentIndex].src;
}


function toggleSection(id) {
document.querySelectorAll('.gallery-section').forEach(section => {
section.style.display = (section.id === id) ? 'block' : 'none';
});
}

function scrollToTop() {
window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
if (document.getElementsByClassName("mySlides").length > 0) {
showSlides();
}
initLightbox();
toggleSection("sunrise"); 

const goUpBtn = document.getElementById("goUpBtn");
if (goUpBtn) {
window.addEventListener("scroll", () => {
if (window.scrollY > 200) {
goUpBtn.classList.add("show");
} else {
goUpBtn.classList.remove("show");
}
});
}
});
