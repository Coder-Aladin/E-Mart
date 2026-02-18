const loginBtns = document.querySelectorAll('.login-btn');
const loginBox = document.querySelector('.login-box');

const closeBtn = document.getElementById('close-login');

const passInput = document.getElementById('user_password');
const passLabbel = document.getElementById('pass-label');
const passCheck = document.getElementById('pass_show');

loginBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        loginBox.style.display = 'block';
    })
});

closeBtn.addEventListener('click', () => {
    loginBox.style.display = 'none';
})

passCheck.addEventListener('change', () => {
    if(passCheck.checked){
        passInput.type = 'text';
        passLabbel.innerHTML = 'hide password';
    } else {
        passInput.type = 'password';
        passLabbel.innerHTML = 'show password';
    }
})