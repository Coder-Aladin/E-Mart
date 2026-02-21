const searchBtn = document.getElementById('search-btn');
const searchBox = document.querySelector('.search-box');
const menuOpen = document.getElementById('menu-btn');
const menuClose = document.getElementById('close-panel');
const menuBox = document.querySelector('.panel-2');

searchBtn.addEventListener('click', () => {
    searchBox.classList.toggle('active');
    menuBox.classList.remove('active');
});

menuOpen.addEventListener('click', () => {
    menuBox.classList.toggle('active');
    searchBox.classList.remove('active');
});

menuClose.addEventListener('click', () => {
    menuBox.classList.toggle('active');
});

