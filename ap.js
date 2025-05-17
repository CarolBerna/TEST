document.addEventListener('DOMContentLoaded', function() {
    const menubtn = document.getElementById('mobile');
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    // Open menu when clicking hamburger
    menubtn.addEventListener('click', function() {
        nav.classList.add('active');
        // Change icon to X
        bar.classList.remove('fa-bars');
        bar.classList.add('fa-times');
    });

    // Close menu when clicking X
    close.addEventListener('click', function() {
        nav.classList.remove('active');
        // Revert icon to bars
        bar.classList.remove('fa-times');
        bar.classList.add('fa-bars');
    });

    // Close menu when clicking outside (optional)
    document.addEventListener('click', function(e) {
        // If click is outside navbar and menu button
        if (!nav.contains(e.target) && !menubtn.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            bar.classList.remove('fa-times');
            bar.classList.add('fa-bars');
        }
    });
});

    
    

