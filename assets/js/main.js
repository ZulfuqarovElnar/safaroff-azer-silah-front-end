
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

const menu = document.getElementById("mobile-menu");

  function openMenu() {
    menu.classList.remove("translate-x-full");
    menu.classList.add("translate-x-0");
  }

  function closeMenu() {
    menu.classList.remove("translate-x-0");
    menu.classList.add("translate-x-full");
  }