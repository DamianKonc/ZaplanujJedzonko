const buttons = document.querySelectorAll(".landingPage__carousel-el-btn");
const carouselEls = document.querySelectorAll(".landingPage__carousel-el");
let number = 0;
export function carousel() {
  buttons.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (
        e.currentTarget.classList.contains("landingPage__carousel-el-btn-1")
      ) {
        number--;
      } else if (
        e.currentTarget.classList.contains("landingPage__carousel-el-btn-2")
      ) {
        number++;
      }

      switch (number) {
        case -1:
          carouselEls[2].classList.add("show");
          carouselEls[0].classList.remove("show");
          carouselEls[1].classList.remove("show");
          number = 2;
          break;

        case 0:
          carouselEls[0].classList.add("show");
          carouselEls[1].classList.remove("show");
          carouselEls[2].classList.remove("show");
          break;
        case 1:
          carouselEls[1].classList.add("show");
          carouselEls[0].classList.remove("show");
          carouselEls[2].classList.remove("show");
          break;
        case 2:
          carouselEls[2].classList.add("show");
          carouselEls[0].classList.remove("show");
          carouselEls[1].classList.remove("show");
          break;
        case 3:
          carouselEls[0].classList.add("show");
          carouselEls[1].classList.remove("show");
          carouselEls[2].classList.remove("show");
          number = 0;
          break;
      }
    });
  });
}
