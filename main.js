document.querySelector(".hamburger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".slide-menu").classList.toggle("active");
});

// const hamburger = document.getElementsByClassName(".hamburger");
// hamburger.addEEventListener("click", () => {
//   this.classList.add("active");
// });
