import '/styles/style.scss';

import '/styles/header.scss';
import '/styles/navbar.scss';

import '/styles/projects.scss';
import '/styles/about.scss';
import '/styles/offer.scss';
import '/styles/skills.scss';
import '/styles/contact.scss';

import '/styles/footer.scss';

const nav = document.querySelector('.nav__list');
const openNavButton = document.querySelector('#nav__toggle-open');
const closeNavButton = document.querySelector('#nav__toggle-close');

const openNav = function () {
    if (nav.style.display === 'none') {
        nav.style.display = 'flex';
        openNavButton.style.display = 'none';
        closeNavButton.style.display = 'inline-block';
    }

    else {
        nav.style.display = 'none';
        openNavButton.style.display = 'inline-block';
        closeNavButton.style.display = 'none';
    }
};

openNavButton.addEventListener('click', openNav);

const closeNav = function () {

    nav.style.display = 'none';

    openNavButton.style.display = 'inline-block';

    closeNavButton.style.display = 'none';
};

closeNavButton.addEventListener('click', closeNav);

if (document.body.clientWidth < 1000) {
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav);
    });
}