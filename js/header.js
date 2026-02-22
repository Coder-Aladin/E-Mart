document.addEventListener('click', (e) => {
    if (e.target.closest('#search-btn')) {
        document.querySelector('.search-box')?.classList.toggle('active');
        document.querySelector('.panel-2')?.classList.remove('active');
    }
});

document.addEventListener('click', (e) => {
    if (e.target.closest('#menu-btn')) {
        document.querySelector('.panel-2')?.classList.toggle('active');
        document.querySelector('.search-box')?.classList.remove('active');
    }
});

document.addEventListener('click', (e) => {
    if (e.target.closest('#close-panel')) {
        document.querySelector('.panel-2')?.classList.remove('active');
    }
});