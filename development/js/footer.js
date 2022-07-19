const links = document.querySelectorAll(".footer__socials-icons-el");

export function footer() {
  links.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
}
