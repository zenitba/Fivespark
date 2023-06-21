// loader
var loader = document.getElementById("preloader");

if (typeof window === 'undefined') {
  // JavaScript is disabled
  loader.classList.add("js-disable");
} else {
  // JavaScript is enabled
  loader.classList.add("js-enable");

  window.addEventListener("load", function(){
    loader.style.display = "none";
  });
}

// Hamburger menu PE
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

// Add .js-enable class to body
body.classList.add("js-enable");

if (menuBtn && cancelBtn) {
  menuBtn.onclick = () => {
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
  };

  cancelBtn.onclick = () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
  };
}

window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
};



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    } 
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
