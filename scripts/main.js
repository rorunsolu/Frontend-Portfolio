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
            //popupContainer.style.display = 'flex';
            popupContainer.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });

    const closeNavBtn = popupContainer.querySelector('.nav__toggle-close');

    closeNavBtn.addEventListener('click', () => {
        //popupContainer.style.display = 'none';
        popupContainer.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    const navLinks = popupContainer.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            //popupContainer.style.display = 'none';
            popupContainer.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    popupContainer.addEventListener('click', (event) => {
        if (event.target === popupContainer) {
            //popupContainer.style.display = 'none';
            popupContainer.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    const cards = document.querySelectorAll('article, .about__image');

    const revealCards = () => {
        const revealTrigger = window.innerHeight * 0.95;

        cards.forEach(card => {
            const topOfCard = card.getBoundingClientRect().top;

            if (topOfCard < revealTrigger) {
                card.classList.add('reveal');
            }
        });
    };

    window.addEventListener('scroll', revealCards);

    revealCards();

    document.getElementById('email-link').addEventListener('click', function (event) {
        event.preventDefault();
        window.open('mailto:rorunsolu@gmail.com', '_blank');
    });
});