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

  // handle checkbox even if label is clicked
  const checkbox = e.target.closest('#pass_show');
  if (!checkbox) return;

  const passInput = document.getElementById('user_password');
  const passLabel = document.getElementById('pass-label');

  if (!passInput || !passLabel) return;

  if (checkbox.checked) {
    passInput.type = 'text';
    passLabel.innerText = 'hide password';
  } else {
    passInput.type = 'password';
    passLabel.innerText = 'show password';
  }
});