// Add rotation animation on hover using anime.js
document.querySelectorAll('.rotate-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        anime({
            targets: card,
            rotate: '1turn',  // Rotate 360 degrees
            easing: 'easeInOutSine',
            duration: 1000
        });
    });
});



