import '/styles/style.scss';

import '/styles/header.scss';
import '/styles/navbar.scss';

import '/styles/projects.scss';
import '/styles/about.scss';
import '/styles/offer.scss';
import '/styles/skills.scss';
import '/styles/contact.scss';

import '/styles/button.scss';

import '/styles/footer.scss';

document.addEventListener('DOMContentLoaded', () => {
    const openNavBtn = document.querySelector('.nav__toggle-open');
    const popupContainer = document.querySelector('.popup-container');

    openNavBtn.addEventListener('click', () => {
        if (popupContainer) {
            popupContainer.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    });

    const closeNavBtn = popupContainer.querySelector('.nav__toggle-close');

    closeNavBtn.addEventListener('click', () => {
        popupContainer.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    const navLinks = popupContainer.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            popupContainer.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    popupContainer.addEventListener('click', (event) => {
        if (event.target === popupContainer) {
            popupContainer.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});