const loginBtns = document.querySelectorAll('.login-box');
const loginBox = document.querySelector('.login-box');

loginBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        loginBox.style.display = 'block';
    })
});

