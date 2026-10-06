const navbar = document.querySelector(".nav");
const navbarImage = document.querySelector(".nav__image");
const navbarList = document.querySelector(".nav__list");
const headerImage = document.querySelector(".header__image");
const headerButton = document.querySelector(".header-button");

const watchScroll = () => {
  const navbarBottom = navbar.getBoundingClientRect().bottom;
  const headerImageBottom = headerImage.getBoundingClientRect().bottom;

  if (navbarBottom > headerImageBottom) {
    navbarImage.style.transform = "translateX(32px)";
    navbarList.style.transform = "translateX(32px)";
    navbarImage.style.opacity = "1";
  } else {
    navbarImage.style.transform = "translateX(-90px)";
    navbarList.style.transform = "translateX(-75px)";
    navbarImage.style.opacity = "0";
  }
};

window.addEventListener("scroll", watchScroll);
