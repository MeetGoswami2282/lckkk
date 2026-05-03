

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

  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');
  const line3 = document.getElementById('line3');

  let isOpen = false;

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    isOpen = !isOpen;

    if (isOpen) {
      // PERFECT X (no translation mismatch)
      line1.style.transform = 'rotate(45deg)';
      line2.style.opacity = '0';
      line3.style.transform = 'rotate(-45deg)';
    } else {
      // Reset to hamburger
      line1.style.transform = 'translateY(-8px) rotate(0)';
      line2.style.opacity = '1';
      line3.style.transform = 'translateY(8px) rotate(0)';
    }
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


  // vendor web dashboard slider

