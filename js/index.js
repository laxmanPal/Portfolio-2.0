// Header Scrolling

const header = document.getElementById("header");

let prevScrollY = window.pageYOffset;
window.addEventListener("scroll", () => {
  const currentScrollY = window.pageYOffset;

  const isScrollingDown = currentScrollY > prevScrollY;

  if (isScrollingDown) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }
  prevScrollY = currentScrollY;
});

// Mobile Navbar

const mobileMenuContainer = document.getElementById("mobile-menu-container");

const mobileMenu = document.querySelector(".mobile-menu");

mobileMenuContainer.addEventListener("click", (e) => {
  mobileMenu.classList.toggle("active");
});
