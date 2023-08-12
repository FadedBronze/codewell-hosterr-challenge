const mobileNav = document.querySelector(".nav-mobile");
const desktopNav = document.querySelector(".nav-desktop");

const handleResize = () => {
  if (window.innerWidth > 1000) {
    mobileNav.classList.add("hidden");
    desktopNav.classList.remove("hidden");
  } else {
    desktopNav.classList.add("hidden");
    mobileNav.classList.remove("hidden");
  }
};

window.addEventListener("resize", handleResize);
