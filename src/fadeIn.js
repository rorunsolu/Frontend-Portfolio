const cards = document.querySelectorAll('article, .contact__image');

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