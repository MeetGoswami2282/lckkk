// navbar

  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: { slidesPerView: 1 },
      1024: { slidesPerView: 2 }
    }
  });
});




  // faq


    const buttons = document.querySelectorAll(".faq-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector("span");

      content.classList.toggle("hidden");
      icon.classList.toggle("rotate-45");
    });
  });


// slider 


  const slider = document.getElementById('slider');

  function getCardWidth() {
    const card = slider.querySelector('div');
    return card.offsetWidth + 24; // + gap
  }

  document.getElementById('next').onclick = () => {
    slider.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
  };

  document.getElementById('prev').onclick = () => {
    slider.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
  };


