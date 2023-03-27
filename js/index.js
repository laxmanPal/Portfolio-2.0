const mobileMenuContainer = document.getElementById("mobile-menu-container");

const mobileMenu = document.querySelector(".mobile-menu");

mobileMenuContainer.addEventListener("click", (e) => {
  mobileMenu.classList.toggle("active");
});

const headingText = new SplitType('.heading-huge')

gsap.to(".char" , {
  y:0,
  stagger:0.05,
  delay : 0.5,
  duration : 0.1
})

gsap.to(".fit-cover-image" , {
  y:0,
  stagger:0.05,
  delay : 0.5,
  duration : 0.1
})

gsap.to(".social-link" , {
  y:0,
  stagger:0.05,
  delay : 0.5,
  duration : 0.1
})