const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// Add event listener for opening menu
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

// Add event listener for closing menu
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}


