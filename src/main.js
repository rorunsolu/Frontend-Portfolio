import './styles/style.scss';

import './styles/header.scss';
import './styles/navbar.scss';
import './styles/footer.scss';

import './styles/experience.scss';
import './styles/projects.scss';
import './styles/about.scss';
import './styles/offer.scss';
import './styles/skills.scss';
import './styles/contact.scss';

import './styles/button.scss';
import './styles/utilities.scss';
import './styles/typography.scss';


document.addEventListener('DOMContentLoaded', () => {
    const openNavBtn = document.querySelector('.nav__toggle-open');
    const popupContainer = document.querySelector('.popup-container');

    openNavBtn.addEventListener('click', () => {
        if (popupContainer) {
            popupContainer.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });

    const closeNavBtn = popupContainer.querySelector('.nav__toggle-close');

    closeNavBtn.addEventListener('click', () => {
        popupContainer.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    const navLinks = popupContainer.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            popupContainer.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    popupContainer.addEventListener('click', (event) => {
        if (event.target === popupContainer) {
            popupContainer.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    document.querySelectorAll('.email-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            window.open('mailto:rorunsolu@gmail.com', '_blank');
        });
    });

    
});