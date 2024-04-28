let notificationStack = [];

function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

document.getElementById('extraButton').addEventListener('click', () => {
    if (!document.getElementById('termsCheckbox').checked) {
        createNotificationBox('rgba(255, 0, 0, 0.8)', 'Error', 'You must agree to the terms before joining.');
        return;
    }

    createNotificationBox('rgba(255, 0, 0, 0.8)', 'Currently unavailable', 'This is still a work in progress! While most of it is finished some important parts are not!');
    return;
});

function createNotificationBox(color, titleText, subtitleText) {
    const box = document.createElement('div');
    box.style.position = 'fixed';
    box.style.bottom = '20px';
    box.style.right = '20px';
    box.style.backgroundColor = color;
    box.style.padding = '15px';
    box.style.borderRadius = '10px';
    box.style.fontFamily = 'Inter, sans-serif';
    box.style.fontSize = '16px';
    box.style.transition = 'right 0.5s, bottom 0.5s, transform 0.3s, opacity 0.3s';
    box.style.right = '-300px';
    box.style.cursor = 'pointer';
    box.style.color = 'white';
    box.style.boxShadow = '0 0 10px #fff';
    box.style.width = '300px'; 
    box.style.height = '100px';

    const title = document.createElement('h1');
    title.textContent = titleText;
    title.style.fontSize = '20px';
    title.style.marginBottom = '5px';
    title.style.marginTop = '4px';

    const separator = document.createElement('hr');
    separator.style.borderTop = '1px solid white';
    separator.style.marginTop = '10px';

    const subtitle = document.createElement('p');
    subtitle.textContent = subtitleText;
    subtitle.style.fontSize = '14px';
    subtitle.style.marginTop = '10px';

    box.appendChild(title);
    box.appendChild(separator);
    box.appendChild(subtitle);
    document.body.appendChild(box);

    box.style.bottom = `${20 + (notificationStack.length * 150)}px`;

    notificationStack.push(box);

    setTimeout(() => {
        box.style.right = '20px';
    }, 0);

    let timeoutId;
    let remaining = 5000;
    let start;

    function startTimeout() {
        start = Date.now();
        timeoutId = setTimeout(() => {
            box.style.right = '-390px';
            setTimeout(() => {
                notificationStack = notificationStack.filter(notification => notification !== box);
                notificationStack.forEach((notification, index) => {
                    notification.style.bottom = `${20 + (index * 150)}px`;
                });
            }, 500);
        }, remaining);
    }

    startTimeout();

    box.addEventListener('mouseenter', () => {
        clearTimeout(timeoutId);
        remaining -= Date.now() - start;
        box.style.transform = 'scale(1.1)';
        box.style.zIndex = '1000';
        notificationStack.forEach(notification => {
            if (notification !== box) {
                notification.style.opacity = '0.5';
            }
        });
    });

    box.addEventListener('mouseleave', () => {
        startTimeout();
        box.style.transform = 'scale(1.0)';
        box.style.zIndex = '0';
        notificationStack.forEach(notification => {
            if (notification !== box) {
                notification.style.opacity = '1.0';
            }
        });
    });

    box.addEventListener('click', () => {
        box.style.right = '-390px';
        setTimeout(() => {
            notificationStack = notificationStack.filter(notification => notification !== box);
            notificationStack.forEach((notification, index) => {
                notification.style.bottom = `${20 + (index * 150)}px`;
            });
        }, 500);
    });
} 
