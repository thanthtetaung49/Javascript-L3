const openButton = document.querySelector(".open-btn");
const closeButton = document.querySelector(".close-btn");
const getNav = document.querySelector(".nav");

openButton.addEventListener("click", function () {
  getNav.classList.add("visible");
});

closeButton.addEventListener("click", function () {
  getNav.classList.remove("visible");
});

// 5NV