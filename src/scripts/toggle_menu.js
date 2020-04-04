const toggle = document.querySelector(".nav_toggle");
const nav = document.querySelector(".nav_ul");
const content = document.querySelector(".content");
const indicator = document.querySelector(".side-indicator");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  nav.classList.toggle("change");
  content.classList.toggle("content_a");
  indicator.classList.toggle("indicator_a");
});

export default toggle;
