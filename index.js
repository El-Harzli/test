let swiper1 = new Swiper('.channels-carousel .swiper-container', {
    slidesPerView: 6,
    slidesPerGroup:1,
    loop: false,
    // spaceBetween: 100,
    grabCursor: true,
    autoplay: {
        delay: 1000,
    },

});


let swiper2 = new Swiper('.feature-content .swiper-container', {
    slidesPerView: 4,
    slidesPerGroup:1,
    loop: false,
    spaceBetween: 15,
    grabCursor: true,
    // autoplay: {
    //     delay: 1000,
    // },
        // If we need pagination
    pagination: {
        el: '.feature-content .swiper-pagination',
    },

});


let swiper3 = new Swiper('.movies-carousel .swiper-container', {
  slidesPerView: 5,
  slidesPerGroup:1,
  loop: false,
  spaceBetween: 10,
  grabCursor: true,
  autoplay: {
      delay: 1000,
  },
});



// On scroll, add blurred transparent background color to the header
let header = document.querySelector("header");
window.addEventListener('scroll', () => {
  if(window.scrollY > 0){
    header.classList.add("header-bg");
  }
  else{
    header.classList.remove("header-bg");
  }
});