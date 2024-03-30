const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  reset: true,
});

sr.reveal(`.heading,.content-about-me,.portfolio-container,
.container-testimonial,.shape-2`, {
  origin: "left",
  interval: 100,
});

sr.reveal(
  `.container-home,.content-about-me,.portfolio-container-2,
  .container-skills,.container-2,.about-img`,
  {
    origin: "right",
    interval: 100,
  }
);

sr.reveal(`.about-title,.service-container-2,.contact-us-1,
.service-heading`, {
  origin: "top",
  interval: 100,
});

sr.reveal(`.buttons,.service-container-3`, {
  origin: "bottom",
  interval: 100,
});

function toggleMode() {
  const body = document.body;
  body.classList.toggle("night-mode");
}

// var swiper = new Swiper(".slide-content ", {
//   slidesPerView: 3,
//   spaceBetween: 25,
//   loop: true,
//   gragCursor: "true",
//   centerSlide: "true",
//   fade: "true",
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


