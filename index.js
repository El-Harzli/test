// let Whatsapp = '447426432392';


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
// document.getElementById('toggle-button').addEventListener('change', function() {
//     if (this.checked) {
//         console.log('VIP');
//     } else {
//         console.log('Premium');
//     }
// });


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





document.addEventListener('DOMContentLoaded', () => {
    const premiumLabel = document.getElementById('label-premium');
    const vipLabel = document.getElementById('label-vip');
    const slider = document.getElementById('toggle-slider');
    const selectedPack = document.getElementById('selected-pack');
    const priceCTA = document.querySelectorAll('.price-CTA');
    const priceCards = document.querySelectorAll('.price-card');
    const prices = document.querySelectorAll('.price');
    const whatsappNumber = '447426432392'; // Replace with your actual WhatsApp number

    let currentSelection = 'premium'; // Default selection

    function updateSelection(selected) {
        if (selected === 'premium') {
            slider.style.left = '5px';
            slider.style.backgroundColor = 'blue';
            selectedPack.textContent = 'PREMIUM';

            premiumLabel.classList.add('active');
            vipLabel.classList.remove('active');
            vipLabel.classList.add('inactive');
            premiumLabel.classList.remove('inactive');
            premiumLabel.style.backgroundColor = 'blue';
            vipLabel.style.backgroundColor = '#e0e0e0';
            premiumLabel.style.color = '#fff';
            vipLabel.style.color = 'var(--colors-base_grey600)';

            priceCTA.forEach((e) => {
                e.classList.remove('vip');
            });
            priceCards.forEach((e) => {
                e.classList.remove('vip');
            });
            prices.forEach((e) => {
                e.classList.remove('vip');
            });

            currentSelection = 'premium';
        } else {
            slider.style.left = '150px';
            slider.style.backgroundColor = 'gold';
            selectedPack.textContent = 'VIP';

            vipLabel.classList.add('active');
            premiumLabel.classList.remove('active');
            vipLabel.classList.remove('inactive');
            premiumLabel.classList.add('inactive');
            vipLabel.style.backgroundColor = 'gold';
            premiumLabel.style.backgroundColor = '#e0e0e0';
            vipLabel.style.color = 'black';
            premiumLabel.style.color = 'var(--colors-base_grey600)';

            priceCTA.forEach((e) => {
                e.classList.add('vip');
            });
            priceCards.forEach((e) => {
                e.classList.add('vip');
            });
            prices.forEach((e) => {
                e.classList.add('vip');
            });

            currentSelection = 'vip';
        }
    }

    premiumLabel.addEventListener('click', () => updateSelection('premium'));
    vipLabel.addEventListener('click', () => updateSelection('vip'));

    // Initial setup
    updateSelection('premium');

    // Add event listener to Buy Now buttons
    document.querySelectorAll('.price-CTA .cta').forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            const plan = button.getAttribute('data-plan');
            const price = button.getAttribute('data-price');
            const message = `I am interested in the ${plan} plan (${price}) with ${currentSelection.toUpperCase()} package.`;

            // WhatsApp URL with pre-filled message
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    });
});


