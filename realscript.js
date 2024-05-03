const target = document.querySelector('.big-text');
const text = target.textContent;
const possibleLower = 'abcdefghijklmnopqrstuvwxyz0123456789';
const possibleUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
target.textContent = '';

for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    target.appendChild(span);

    setTimeout(() => {
        let randomString = '';
        if (text[i] !== ' ') {
            for (let j = 0; j < 10; j++) {
                setTimeout(() => {
                    if (i === 0 || text[i - 1] === ' ') {
                        randomString = possibleUpper.charAt(Math.floor(Math.random() * possibleUpper.length));
                    } else {
                        randomString = possibleLower.charAt(Math.floor(Math.random() * possibleLower.length));
                    }
                    span.textContent = randomString;
                }, j * 50);
            }
        }
        setTimeout(() => {
            span.textContent = text[i];
        }, 500);
    }, i * 500);

    span.addEventListener('mouseover', function() {
        const randomString = text[i] === text[i].toUpperCase() ?
            possibleUpper.charAt(Math.floor(Math.random() * possibleUpper.length)) :
            possibleLower.charAt(Math.floor(Math.random() * possibleLower.length));
        span.textContent = randomString;
    });

    span.addEventListener('mouseout', function() {
        span.textContent = text[i];
    });
}