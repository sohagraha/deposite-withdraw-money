let email = document.getElementById('emailId');
let pass = document.getElementById('passwordId');
let login = document.getElementById('loginId');

login.addEventListener('click', function () {
    if ((email.value) == 'sohagrahabd@gmail.com' && (pass.value) == 'sohagraha') {
        window.location.href = 'banking.html';

    }
})


