const updateCursor = ({ x, y }) => {
    document.documentElement.style.setProperty('--x', x);
    document.documentElement.style.setProperty('--y', y);
};

document.body.addEventListener('pointermove', updateCursor);