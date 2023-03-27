const mobileMenuContainer = document.getElementById("mobile-menu-container");

const mobileMenu = document.querySelector(".mobile-menu");

mobileMenuContainer.addEventListener("click", (e) => {
  mobileMenu.classList.toggle("active");
});
