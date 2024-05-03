const target = document.querySelector('.big-text');
const text = target.textContent;
const possibleLower = 'abcdefghijklmnopqrstuvwxyz0123456789';
const possibleUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.textContent = text[i];
    target.appendChild(span);

    if (text[i] !== ' ') {
        let intervalId;
        const shuffle = () => {
            let randomString = '';
            const possible = text[i] === text[i].toUpperCase() ? possibleUpper : possibleLower;
            const possibleWithoutCurrent = possible.replace(text[i], '');
            randomString = possibleWithoutCurrent.charAt(Math.floor(Math.random() * possibleWithoutCurrent.length));
            span.textContent = randomString;
        };

        setTimeout(() => {
            for (let j = 0; j < 10; j++) {
                setTimeout(shuffle, j * 50);
            }
            setTimeout(() => {
                span.textContent = text[i];
            }, 500);
        }, i * 500);

        span.addEventListener('mouseover', function() {
            intervalId = setInterval(shuffle, 50);
        });

        span.addEventListener('mouseout', function() {
            clearInterval(intervalId);
            span.textContent = text[i];
        });
    }
}