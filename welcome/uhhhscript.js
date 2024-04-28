const background = document.body;

function shootingStar() {
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.width = '2px';
    star.style.height = '2px';
    star.style.background = 'white';
    star.style.borderRadius = '50%';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = '100%'; // Start at the right edge of the screen
    star.style.animation = `shoot ${2 + Math.random() * 3}s linear`;
    star.style.filter = 'blur(2px)';
    background.appendChild(star);
    setTimeout(() => {
        star.remove();
    }, 6000);
}

setInterval(shootingStar, 250);