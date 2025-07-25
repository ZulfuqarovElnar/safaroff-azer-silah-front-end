
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['"Helvetica Neue"', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    }
  }
}

// const cursor = document.getElementById('cursor');
//   document.addEventListener('mousemove', (e) => {
//     cursor.style.left = e.clientX + 'px';
//     cursor.style.top = e.clientY + 'px';
// });

// Header menu
const menu = document.getElementById("mobile-menu");

  function openMenu() {
    menu.classList.remove("translate-x-full");
    menu.classList.add("translate-x-0");
  }

  function closeMenu() {
    menu.classList.remove("translate-x-0");
    menu.classList.add("translate-x-full");
  }

  document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.mySwiper', {
      direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 1950,
        disableOnInteraction: false,
      },
      speed: 200,
      slidesPerView: 1,
      allowTouchMove: false,
    });

    let active = document.querySelector('.swiper-slide-active');
    if (active) active.classList.add('bounce-slide');

    swiper.on('slideChangeTransitionStart', () => {
      document.querySelectorAll('.bounce-slide').forEach(el => {
        el.classList.remove('bounce-slide');
      });
      const curr = document.querySelector('.swiper-slide-active');
      if (curr) curr.classList.add('bounce-slide');
    });
  });


   // Statistics
  document.addEventListener('DOMContentLoaded', () => {
    const counts = document.querySelectorAll('.count');
    let animated = false;
    const duration = 700;
    const delay = 200;

    function animateCounts() {
      counts.forEach(el => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        const startTime = performance.now();

        function update(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1); 
          const current = Math.floor(progress * target);

          el.textContent = current + '+';

          if (progress < 1) {
            requestAnimationFrame(update);
          }
        }

        requestAnimationFrame(update);
      });
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          setTimeout(() => {
            animateCounts();
          }, delay);
          animated = true;
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });

    const statisticsSection = document.getElementById('statistics');
    if (statisticsSection) {
      observer.observe(statisticsSection);
    }
  });



  // Hero 
  const header = document.getElementById('main-header');
  const threshold = window.innerHeight;

  window.addEventListener('scroll', () => {
    if (window.scrollY >= threshold) {

      header.style.opacity = '0';
      header.style.pointerEvents = 'none';
    } else {
      header.style.opacity = '1';
      header.style.pointerEvents = 'auto';
    }
  });

  // Our Slide
  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll("#our-swiper .swiper-slide");
    const total = slides.length;
    let current = 0;

    let maxZ = Array.from(slides).reduce((m, s) =>
      Math.max(m, parseInt(getComputedStyle(s).zIndex) || 0), 0);

    setInterval(() => {
      const next = (current + 1) % total;

      slides[next].style.transition = "none";
      slides[next].style.transform = "translateY(100%)";
      slides[next].style.opacity = "0";
      void slides[next].offsetWidth;

      slides[next].style.transition = "transform 0.9s ease-out";
      slides[next].style.transform  = "translateY(0)";
      slides[next].style.opacity    = "1";
      slides[next].style.zIndex     = ++maxZ;

      current = next;
    }, 900);
  });

  // Bootcamp
  document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("bootcamp-section");
  const icons = document.getElementById("bootcamp-icons");

  if (section && icons) {
    icons.addEventListener("mouseenter", () => {
      section.classList.add("scale-110");
    });

    icons.addEventListener("mouseleave", () => {
      section.classList.remove("scale-110");
    });
  }
});
