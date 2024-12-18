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

    const cards = document.querySelectorAll('article, .about__image');

    const revealCards = () => {
        const revealTrigger = window.innerHeight * 0.90;

        cards.forEach(card => {
            const topOfCard = card.getBoundingClientRect().top;

            if (topOfCard < revealTrigger) {
                card.classList.add('reveal');
            }
        });
    };

    window.addEventListener('scroll', revealCards);

    revealCards();

    document.querySelectorAll('.email-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            window.open('mailto:rorunsolu@gmail.com', '_blank');
        });
    });

    const navbar = document.querySelector('.nav');
    const navbarImage = document.querySelector('.nav__image');
    const navbarList = document.querySelector('.nav__list');
    const headerImage = document.querySelector('.header__image');

    const watchScroll = () => {
        const navbarBottom = navbar.getBoundingClientRect().bottom;
        const headerImageBottom = headerImage.getBoundingClientRect().bottom;

        if (navbarBottom > headerImageBottom) {
            navbarImage.style.transform = 'translateX(32px)';
            navbarList.style.transform = 'translateX(32px)';
            navbarImage.style.opacity = '1';
        } else {
            navbarImage.style.transform = 'translateX(-90px)';
            navbarList.style.transform = 'translateX(-75px)';
            navbarImage.style.opacity = '0';
        }
    };

    window.addEventListener('scroll', watchScroll);
});