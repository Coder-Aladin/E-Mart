document.addEventListener('click', (e) => {

  // OPEN LOGIN
  if (e.target.closest('#login-btn')) {
    const loginBox = document.querySelector('.login-box');
    if (loginBox) loginBox.style.display = 'block';
  }

  // CLOSE LOGIN
  if (e.target.closest('#close-login')) {
    const loginBox = document.querySelector('.login-box');
    if (loginBox) loginBox.style.display = 'none';
  }

});

document.addEventListener('change', (e) => {
    console.log('CHANGE:', e.target);
    if (e.target.id === 'pass-show') {
        const passLabel = document.getElementById('pass-label');
        const passInput = document.getElementById('user_password');
        
        if (!passInput || !passLabel) return;

        if (e.target.checked) {
            passLabbel.innerHTML = 'hide password';
            passInput.type = 'text';
        } else {
            passLabbel.innerHTML = 'hide password';
            passInput.type = 'text';
        }
    }
})