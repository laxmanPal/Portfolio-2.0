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
const mobileNavbar = document.querySelector(".mobile-navbar");
const menuMobile = document.querySelector(".menu-mobile");

mobileMenuContainer.addEventListener("click", (e) => {
  mobileMenu.classList.toggle("active");
  mobileNavbar.classList.toggle("active");
  menuMobile.classList.toggle("active");
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

gsap.registerPlugin(ScrollTrigger);

gsap.from(".navbar-container", {
  y: -80,
  opacity: 0,
});

gsap.from(".logo", {
  y: 30,
  opacity: 0,
  delay: 0.5,
});

gsap.from(".nav-link", {
  y: 10,
  opacity: 0,
  stagger: 0.3,
  delay: 1,
});

gsap.from(".heading-huge", {
  y: 50,
  opacity: 0,
  stagger: 0.3,
  delay: 0.8,
});

gsap.from(".social-link", {
  y: 10,
  opacity: 0,
  stagger: 0.3,
  delay: 1.5,
});

gsap.from(".name", {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-me",
  },
});

gsap.from(".para", {
  x: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".about",
  },
});

gsap.from(".techImg", {
  scale: 0,
  opacity: 0,
  // duration: 1,
  stagger: 0.09,
  scrollTrigger: {
    trigger: ".techImg",
  },
});
