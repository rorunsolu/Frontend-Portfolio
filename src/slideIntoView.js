const navbar = document.querySelector('.nav');
const navbarImage = document.querySelector('.nav__image');
const navbarList = document.querySelector('.nav__list');
const headerImage = document.querySelector('.header__image');
const navbarButton = document.querySelector('.nav-button');
const headerButton = document.querySelector('.header-button');

const watchScroll = () => {
    const navbarBottom = navbar.getBoundingClientRect().bottom;
    const headerImageBottom = headerImage.getBoundingClientRect().bottom;
    const headerButtonBottom = headerButton.getBoundingClientRect().bottom;

    if (navbarBottom > headerImageBottom) {
        navbarImage.style.transform = 'translateX(32px)';
        navbarList.style.transform = 'translateX(32px)';
        navbarImage.style.opacity = '1';

    } else {
        navbarImage.style.transform = 'translateX(-90px)';
        navbarList.style.transform = 'translateX(-75px)';
        navbarImage.style.opacity = '0';
    }

    if (navbarBottom > headerButtonBottom) {
        navbarButton.style.transform = 'translateX(0px)';
    } else {
        navbarButton.style.transform = 'translateX(600px)';
    }
};

window.addEventListener('scroll', watchScroll);