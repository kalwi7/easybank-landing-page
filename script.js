const naviToggle = document.querySelector(".navigation__toggle-btn");
const naviList = document.querySelector(".navigation__list");
const mockup = document.querySelector(".hero__img img");

naviToggle.addEventListener("click", function () {
  naviList.classList.toggle("enable");
  mockup.classList.toggle("diseble");
});
