const elements = [
  document.body,
  // backgroung element
  document.querySelector(".background"),
  // cards bigger than others
  Array.from(document.querySelectorAll(".social-media__item_big")),
  // cards
  Array.from(document.querySelectorAll(".social-media__item")),
  // titles
  Array.from(document.querySelectorAll(".title-dark")),
  // footer
  document.querySelector(".attribution"),
];

const themeSwitcher = document.querySelector(".switch-theme");
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
