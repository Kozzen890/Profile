// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// more items
const more = document.querySelector("#more");
const navMenu = document.querySelector("#nav-menu");

more.addEventListener("click", function () {
  more.classList.toggle("items-active");
  navMenu.classList.toggle("hidden");
});

// Klik di luar more
window.addEventListener("click", function (e) {
  if (e.target != more && e.target != navMenu) {
    more.classList.remove("items-active");
    navMenu.classList.add("hidden");
  }
});

// Dark Mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Pindahkan Posisi Toggle Sesuai Mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
