let whatsappNumber = '447491613697';
let currentSelection = "Silver";


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


const toggleItems = document.querySelectorAll('.toggle-item');
toggleItems.forEach(item => {
    item.addEventListener('click', () => {
        toggleItems.forEach(i => {
            i.classList.remove('active');
            
        } );
        item.classList.add('active');
        let selectedPack = item.textContent;
        makeFunction(selectedPack);
    });
});


function updateClasses(elements, classesToRemove, classesToAdd) {
    elements.forEach(element => {
        classesToRemove.forEach(cls => element.classList.remove(cls));
        classesToAdd.forEach(cls => element.classList.add(cls));
    });
}

function makeFunction(selectedPack) {
    let prices = document.querySelectorAll(".price");
    let cards = document.querySelectorAll(".price-card");
    let priceCTAs = document.querySelectorAll(".price-CTA");

    let elements = [prices, cards, priceCTAs];
    let classesToRemove = ['vip', 'plat'];
    let classesToAdd;

    switch (selectedPack) {
        case 'Platinum':
            classesToAdd = ['plat'];
            currentSelection = "Platinum";
            break;
        case 'Gold':
            classesToAdd = ['vip'];
            currentSelection = "Gold";
            break;
        default:
            classesToAdd = [];
            currentSelection = "Silver";
            break;
    }

    elements.forEach(elementGroup => {
        updateClasses(elementGroup, classesToRemove, classesToAdd);
    });
}


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