const target = document.querySelector('.big-text');
const generateString = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
const text = generateString();

const possibleLower = 'abcdefghijklmnopqrstuvwxyz0123456789';
const possibleUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    let possible;
    if (i === 0 || text[i - 1] === ' ') {
        possible = possibleUpper;
    } else {
        possible = text[i] === ' ' ? ' ' : (text[i] === text[i].toUpperCase() ? possibleUpper : possibleLower);
    }
    const possibleWithoutCurrent = possible.replace(text[i], '');
    if (i === 4) {
        span.textContent = ' '; 
    } else {
        span.textContent = possibleWithoutCurrent.charAt(Math.floor(Math.random() * possibleWithoutCurrent.length));
    }
    target.appendChild(span);

    let intervalId;
    const shuffle = () => {
        let randomString = '';
        randomString = possibleWithoutCurrent.charAt(Math.floor(Math.random() * possibleWithoutCurrent.length));
        span.textContent = randomString;
    };

    setTimeout(() => {
        intervalId = setInterval(shuffle, 50);
        setTimeout(() => {
            clearInterval(intervalId);
            span.textContent = text[i];
        }, 1000); 
    }, i * 1000); 

    span.addEventListener('mouseover', function() {
        intervalId = setInterval(shuffle, 10); 
    });

    span.addEventListener('mouseout', function() {
        clearInterval(intervalId);
        span.textContent = text[i];
    });
}