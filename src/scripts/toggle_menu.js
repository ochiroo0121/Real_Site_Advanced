const toggle = document.querySelector(".nav_toggle");
const videoBody = document.querySelector(".videoBody");
const nav__container = document.querySelector(".nav__container");
const content = document.querySelector(".content");
const indicator = document.querySelector(".side-indicator");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  nav__container.classList.toggle("change");
  content.classList.toggle("content_a");
  indicator.classList.toggle("indicator_a");
});

toggle.addEventListener("click", () => {
  videoBody.classList.toggle("bodyChange");
});

export default toggle;
