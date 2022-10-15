const naviToggle = document.querySelector(".navigation__toggle-btn");
const naviList = document.querySelector(".navigation__list");
const mockup = document.querySelector(".hero__img img");
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

naviToggle.addEventListener("click", function () {
  naviList.classList.toggle("enable");
  mockup.classList.toggle("diseble");
});

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -300px 0px",
};

const showOnScroll = new IntersectionObserver(function (entries, showOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      showOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach((fader) => {
  showOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  showOnScroll.observe(slider);
});
