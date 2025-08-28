const wrapper = document.querySelector(".wrapper");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuIcon = document.querySelector(".hamburger-menu__icon");
const navItems = document.querySelectorAll(".nav-list__item");
const navBox = document.querySelector(".nav-box");
const themeSlider = document.querySelector(".theme-slider");
const themeSliderIcons = document.querySelectorAll(".icons__item");
let darkTheme = false;

// Add active class for header links
navItems.forEach((element) => {
  element.addEventListener("click", () => {
    // Delete the active class for everyone elements
    navItems.forEach((el) => {
      el.classList.remove("nav-list__item--active");
    });
    // Add the active class to the current element
    element.classList.add("nav-list__item--active");
  });
});
// Hamurgger button action
hamburgerMenu.addEventListener("click", () => {
  // Add and remove nav-box active class
  navBox.classList.toggle("nav-box__active");
  // Add and remove themeSlider active class
  themeSlider.classList.toggle("theme-slider__active");
  // Check navBox active class
  hamburgerMenuIcon.src = navBox.classList.contains("nav-box__active") ? "./img/close-button.svg" : "./img/hamburger-button.svg";
});
// Switch content
function themeContentChange() {
  const logoImg = document.querySelector('img[alt="logo"]');
  const moonIcon = document.querySelector('img[alt="dark-theme"]');
  const sunIcon = document.querySelector('img[alt="light-theme"]');
  if (darkTheme) {
    logoImg.src = "./img/logo-dark.svg";
    moonIcon.src = "./img/Moon_fill.svg";
    sunIcon.src = "./img/Sun_fill_dark.svg";
    moonIcon.classList.add("icons__item--active");
  } else {
    logoImg.src = "./img/logo-light.svg";
    moonIcon.src = "./img/Moon_fill_light.svg";
    sunIcon.src = "./img/Sun_fill.svg";
    sunIcon.classList.add("icons__item--active");
  }
}
// Theme slider action
themeSlider.addEventListener("click", () => {
  darkTheme = !darkTheme;
  themeSliderIcons.forEach((element) => {
    // Add and remove the active class for elements
    element.classList.toggle("icons__item--active");
  });
  themeContentChange();
  saveThemeToLocalStorage();
});
// Load theme from localStorage
function loadThemeFromLocalStorage() {
  const savedTheme = localStorage.getItem("darkTheme");
  darkTheme = savedTheme === "true";
  themeContentChange();
}
// Save theme to localStorage
function saveThemeToLocalStorage() {
  localStorage.setItem("darkTheme", darkTheme.toString());
}

loadThemeFromLocalStorage();
