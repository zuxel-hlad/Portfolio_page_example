window.addEventListener("DOMContentLoaded", () => {
  /* hamburger menu */
  const hamburger = document.querySelector(".hamburger"),
    closeElem = document.querySelector(".menu__close"),
    menu = document.querySelector(".menu");

  const showHamburger = () => {
    menu.classList.add("menu_active");
  };

  const shideHamburger = () => {
    menu.classList.remove("menu_active");
  };

  hamburger.addEventListener("click", () => showHamburger());
  closeElem.addEventListener("click", () => shideHamburger());

  /* skills progress rating handle change */

  const counters = document.querySelectorAll(".skills__ratings-counter"),
    line = document.querySelectorAll(".skills__ratings-line span");

  counters.forEach((counter, i) => {
    let elemWidth = parseInt(counter.innerHTML);
    if (elemWidth > 0 && elemWidth <= 100) {
      return (line[i].style.width = elemWidth + "%");
    } else {
      ratingLine.innerHTML = "вы ввели какую-то дичь";
    }
  });
});
