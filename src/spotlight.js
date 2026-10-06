const borderHoverTolerance = 8;

document.querySelectorAll("article").forEach((card) => {
    card.addEventListener("pointermove", ({ clientX, clientY }) => {
        const bounds = card.getBoundingClientRect();
        const x = clientX - bounds.left;
        const y = clientY - bounds.top;
        const isNearBorder =
            x <= borderHoverTolerance ||
            bounds.width - x <= borderHoverTolerance ||
            y <= borderHoverTolerance ||
            bounds.height - y <= borderHoverTolerance;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
        card.style.setProperty("--border-active", isNearBorder ? "1" : "0");
    });

    card.addEventListener("pointerleave", () => {
        card.style.setProperty("--border-active", "0");
    });
});
