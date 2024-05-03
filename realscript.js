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
            intervalId = setInterval(shuffle, 50);
            setTimeout(() => {
                clearInterval(intervalId);
                span.textContent = text[i];
            }, 1000); // shuffle each character for 1 second
        }, i * 1000); // start shuffling each character 1 second after the previous one

        span.addEventListener('mouseover', function() {
            intervalId = setInterval(shuffle, 50);
        });

        span.addEventListener('mouseout', function() {
            clearInterval(intervalId);
            span.textContent = text[i];
        });
    }
}