document.addEventListener("DOMContentLoaded", function () {

  const rootElement = document.documentElement;

  // ===== THEME TOGGLE =====
  const toggleButton = document.getElementById('theme-toggle');

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      const isDark = rootElement.getAttribute('data-theme') === 'dark';

      if (isDark) {
        rootElement.removeAttribute('data-theme');
        localStorage.removeItem('theme');
      } else {
        rootElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }

  // ===== HEADER SCROLL =====
  let lastScroll = 0;
  const header = document.querySelector("header");

  if (header) {
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll && currentScroll > 80) {
        header.classList.add("header-hidden");
      } else {
        header.classList.remove("header-hidden");
      }

      lastScroll = currentScroll;
    });
  }

  // ===== MENU =====
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav a");

  if (toggle && nav) {

    toggle.addEventListener("click", function () {
      const isActive = nav.classList.toggle("active");
      toggle.setAttribute("aria-expanded", isActive);
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    });

  }

});
