function generateString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

let username = '';
let password = '';

document.getElementById('generateUsername').addEventListener('click', () => {
    if (!username) {
        username = 'Username: ' + generateString();
        document.getElementById('output').innerHTML = username + (password ? '<br>' + password : '');
        checkCredentials();
    }
});

document.getElementById('generatePassword').addEventListener('click', () => {
    if (!password) {
        password = 'Password: ' + generateString();
        document.getElementById('output').innerHTML = (username ? username + '<br>' : '') + password;
        checkCredentials();
    }
});

function checkCredentials() {
    if (username && password) {
        document.querySelector('.rectangle').style.height = '550px';
        document.getElementById('extraButton').style.display = 'inline-block';
        document.querySelector('.terms').classList.remove('hidden');
        document.getElementById('extraButton').classList.remove('hidden');
    }
}
