const header = document.querySelector('.header');

header.addEventListener('click', (e)=> {

    if (e.target.id === 'heart-icon') {
        const heartBtn = document.querySelector('.heart-icon');

        if (heartBtn) {
            window.location.href = 'favourite.html'
        }
    }

});