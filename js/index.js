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

// Cursor

let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  setTimeout(() => {
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
  }, 100);
}

let links = Array.from(
  document.querySelectorAll(
    "li , .logo , .mobile-menu , .social-link , .copyright"
  )
);

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
    outerCursor.style.display = "none";
  });
  link.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
    outerCursor.style.display = "block";
  });
});
