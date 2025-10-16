document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 2,
    focus: "center",
    gap: "-50px",
    trimSpace: false,
    autoplay: false,
    interval: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    cover: true,
    pagination: true,
    drag: false,
  }).mount();
});
