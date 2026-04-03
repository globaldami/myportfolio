// HAMBURGER MENU TOGGLE
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// TYPED.JS
var typed = new Typed("#element", {
  strings: ["Oluwasegun D. Idowu"],
  typeSpeed: 50,
});

// FADE SECTION ON SCROLL
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".fade-section").forEach((el) => {
  observer.observe(el);
});

// THEME TOGGLE
function toggleTheme() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

// APPLY SAVED THEME ON LOAD (default: dark)
(function () {
  const saved = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
})();
