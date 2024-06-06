


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




document.getElementById('mainButton').addEventListener('click', function() {
    document.getElementById('mainButton').style.display = 'none';
    const socialButtons = document.getElementById('socialButtons');
    socialButtons.style.display = 'flex';
    socialButtons.style.animation = 'slide-in 0.3s forwards';
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('socialButtons').style.display = 'none';
    document.getElementById('mainButton').style.display = 'flex';
});




// Toggle
document.getElementById('toggle-button').addEventListener('change', function() {
    if (this.checked) {
        console.log('VIP');
    } else {
        console.log('Premium');
    }
});


// Add to script.js

document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const questionButton = item.querySelector(".faq-question");

        questionButton.addEventListener("click", () => {
            const openItem = document.querySelector(".faq-item.open");

            if (openItem && openItem !== item) {
                openItem.classList.remove("open");
            }

            item.classList.toggle("open");
        });
    });
});
