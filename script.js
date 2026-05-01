

// hero section animation

const scrollRevealItems = document.querySelectorAll('.scroll-reveal');

  function revealScrollItems() {
    scrollRevealItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        item.classList.add('revealed');
      }
    });
  }

  if (scrollRevealItems.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    scrollRevealItems.forEach(item => revealObserver.observe(item));
    revealScrollItems();

    window.addEventListener('scroll', () => {
      revealScrollItems();
      scrollRevealItems.forEach(item => {
        if (!item.classList.contains('revealed')) return;
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7) {
          item.classList.add('move-right');
        } else {
          item.classList.remove('move-right');
        }
      });
    });
  }





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

