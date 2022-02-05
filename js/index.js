const backgroundElem = document.querySelector(".background");

const cardsBig = Array.from(
  document.querySelectorAll(".social-media__item_big")
);

const cards = Array.from(document.querySelectorAll(".social-media__item"));

const titles = Array.from(document.querySelectorAll(".title-dark"));

const themeSwitcher = document.querySelector(".switch-theme");

const footer = document.querySelector(".attribution");

const elements = [
  document.body,
  backgroundElem,
  cardsBig,
  cards,
  titles,
  footer,
];

themeSwitcher.addEventListener("click", () => {
  elements.forEach((element) => {
    toggleClass(element, "light");
  });

  return;
});

function toggleClass(elem, className) {
  if (Array.isArray(elem)) {
    elem.forEach((element) => {
      element.classList.toggle(className);
    });
    return;
  }

  elem.classList.toggle(className);
}
