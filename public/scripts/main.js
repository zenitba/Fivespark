// loader
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
})

// slider show voor de blog
var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });