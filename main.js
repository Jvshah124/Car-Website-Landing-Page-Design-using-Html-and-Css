// --------------Slideshow-------------------
let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll(".slideshow");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds (adjust as needed)
}

showSlides(); // Call the function to start the slideshow

// --------------Collapsing Navbar----------------

const menuIcon = document.getElementById("menu-icon");
const leftMenu = document.querySelector(".left-menu");
const rightMenu = document.querySelector(".right-menu");

menuIcon.addEventListener("click", () => {
  leftMenu.classList.toggle("show");
  rightMenu.classList.toggle("show");
});
