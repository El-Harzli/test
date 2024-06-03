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
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.nav-btn');
  const underline = document.querySelector('.underline');
  const title = document.querySelector('.spotlight-title');
  const description = document.querySelector('.spotlight-description');
  const background = document.querySelector('.spotlight-container');

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          document.querySelector('.nav-btn.active').classList.remove('active');
          this.classList.add('active');
          moveUnderline(this);
          changeContent(this);
      });
  });

  function moveUnderline(button) {
      underline.style.width = `${button.offsetWidth}px`;
      underline.style.left = `${button.offsetLeft}px`;
  }

  function changeContent(button) {
      const id = button.id;

      // Add slide-out class to start the transition
      title.classList.add('slide-out');
      description.classList.add('slide-out');

      switch (id) {
        case 'live-sports':
            background.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.8) -39.59%, rgba(0, 0, 0, 0) 117.14%), url('images/mobile/sports.png')";
            break;
        case 'breaking-news':
            background.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.8) -39.59%, rgba(0, 0, 0, 0) 117.14%), url('images/mobile/news.png')";
            break;
        case 'biggest-events':
            background.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.8) -39.59%, rgba(0, 0, 0, 0) 117.14%), url('images/mobile/awards.png')";
            break;
        default:
            background.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.8) -39.59%, rgba(0, 0, 0, 0) 117.14%), url('images/mobile/sports.png')";
            break;
    }

      // Use a timeout to wait for the slide-out animation to finish before changing content
      setTimeout(() => {
          switch (id) {
              case 'live-sports':
                  title.innerHTML = 'Live Sports';
                  description.innerHTML = 'Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.';
                  break;
              case 'breaking-news':
                  title.innerHTML = 'Breaking News';
                  description.innerHTML = 'Keep pace with what\'s going on locally and globally with trusted opinions from all the top news networks.';
                  break;
              case 'biggest-events':
                  title.innerHTML = 'Biggest Events';
                  description.innerHTML = 'Spectacular, can\'t-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.';
                  break;
              default:
                  title.innerHTML = 'Live Sports';
                  description.innerHTML = 'Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.';
                  break;
          }

          // Remove slide-out class and add slide-in class to trigger the slide-in animation
          title.classList.remove('slide-out');
          description.classList.remove('slide-out');
          title.classList.add('slide-in');
          description.classList.add('slide-in');

          // Remove the slide-in class after the animation completes
          setTimeout(() => {
              title.classList.remove('slide-in');
              description.classList.remove('slide-in');
          }, 300);

      }, 300); // The duration should match the CSS transition duration
  }

  // Initialize the underline position based on the initial active button
  const activeButton = document.querySelector('.nav-btn.active');
  if (activeButton) {
      moveUnderline(activeButton);
  }
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


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".nav-btn");
  const sections = document.querySelectorAll(".content-section");

  buttons.forEach(button => {
      button.addEventListener("click", () => {
          // Remove active class from all buttons
          buttons.forEach(btn => btn.classList.remove("active"));
          // Add active class to the clicked button
          button.classList.add("active");

          // Hide all sections
          sections.forEach(section => section.classList.remove("active"));
          // Show the corresponding section
          const sectionId = button.id.replace("-btn", "");
          document.getElementById(sectionId).classList.add("active");
      });
  });
});