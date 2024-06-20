$(document).ready(function(){
    // Sticky navbar on scroll script
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // Scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0}, 'smooth');
        // Removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    // Applying smooth scroll on menu items click
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        // Toggle icon class
        $('#menu-btn i').toggleClass("active");
        $('#menu-btn i').toggleClass('fa-bars fa-times');

    });

    // Close the menu when a menu item is clicked (for mobile view)
    $('.navbar .menu li a').click(function(){
        $('.navbar .menu').removeClass("active");
        $('#menu-btn i').removeClass("active");
    });
});
$(document).ready(function(){
    // Array of backgrounds, messages, and links
    var backgrounds = ['icons/cows-field.jpeg','icons/back.jpg', 'icons/maize-farm.jpeg'];
    var messages = ["Welcome to Mazao", "Discover Our Services", "Explore Our Products"];
    var links = ["#", "services.html", "products.html"];
    var currentIndex = 0;

    // Preload images
    function preloadImages(urls) {
        $(urls).each(function () {
            $('<img/>')[0].src = this;
        });
    }

    preloadImages(backgrounds);

    function changeBackground() {
        // Change background image
        $('.hero').css('background-image', 'url(' + backgrounds[currentIndex] + ')');
        // Change message and link
        $('#hero-link').text(messages[currentIndex]);
        $('#hero-link').attr('href', links[currentIndex]);
        // Increment index or loop back to the start
        currentIndex = (currentIndex + 1) % backgrounds.length;
    }

    // Initial call to set the first background and message
    changeBackground();

    // Change background, message, and link every 5 seconds
    setInterval(changeBackground, 8000);
});
// Get the button
let mybutton = document.getElementById("scrollup");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
$(document).ready(function(){
    // Array of backgrounds and quotes
    var backgrounds = ['icons/tomato.jpeg', 'icons/vegetables.jpeg', 'icons/hen.jpeg'];
    var quotes = [
        "The farmer has to be an optimist or he wouldn’t still be a farmer.",
        "Farming is not just a job, it's a way of life.",
        "Chickens bring joy, eggs, and lessons in patience and responsibility."
    ];
    var currentIndex = 0;

    // Preload images
    function preloadImages(urls) {
        $(urls).each(function () {
            $('<img/>')[0].src = this;
        });
    }

    preloadImages(backgrounds);

    function changeBackground() {
        // Change background image
        $('.slider-document').css('background-image', 'url(' + backgrounds[currentIndex] + ')');
        // Change quote
        $('.slider-heading').text(quotes[currentIndex]);
        // Increment index or loop back to the start
        currentIndex = (currentIndex + 1) % backgrounds.length;
    }

    // Change background and quote every 8 seconds
    setInterval(changeBackground, 8000);

    // Initialize with the first background and quote
    changeBackground();
});
// Include this JavaScript within your existing script.js or in a separate file
document.addEventListener('DOMContentLoaded', function () {
    const openLoginFormButton = document.getElementById('loginButton1');
    const closeLoginFormButton = document.getElementById('closeLoginForm');
    const loginForm = document.getElementById('loginForm');

    openLoginFormButton.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.style.display = 'flex';
    });

    closeLoginFormButton.addEventListener('click', function () {
        loginForm.style.display = 'none';
    });

    // Optional: Close the form when clicking outside of it
    window.addEventListener('click', function (e) {
        if (e.target === loginForm) {
            loginForm.style.display = 'none';
        }
    });
});

// for oppening add product form 
document.addEventListener('DOMContentLoaded', function () {
    const openFormButton = document.getElementById('loginButton2');
    const closeFormButton = document.getElementById('closeForm');
    const popupForm = document.getElementById('popupForm');

    openFormButton.addEventListener('click', function (e) {
        e.preventDefault();
        popupForm.style.display = 'flex';
    });

    closeFormButton.addEventListener('click', function () {
        popupForm.style.display = 'none';
    });

    // Optional: Close the form when clicking outside of it
    window.addEventListener('click', function (e) {
        if (e.target == popupForm) {
            popupForm.style.display = 'none';
        }
    });
});

// for toggling the ediiting form
// for oppening add product form 
document.addEventListener('DOMContentLoaded', function () {
    const openFormButton = document.getElementById('editbutton1');
    const closeFormButton = document.getElementById('closeForm');
    const popupForm = document.getElementById('editForm');

    openFormButton.addEventListener('click', function (e) {
        e.preventDefault();
        popupForm.style.display = 'flex';
    });

    closeFormButton.addEventListener('click', function () {
        popupForm.style.display = 'none';
    });

    // Optional: Close the form when clicking outside of it
    window.addEventListener('click', function (e) {
        if (e.target == editForm) {
            popupForm.style.display = 'none';
        }
    });
});
// Function to highlight the row based on URL fragment
function highlightRow() {
    var fragment = window.location.hash.substring(1);
    if (fragment) {
        table.rows().every(function() {
            var row = this.node();
            $(row).hide();
            if ($(row).attr('id') === fragment) {
                $(row).show().addClass('highlighted');
            }
        });
    }
}

// Highlight the row on page load
highlightRow();

// Highlight the row if the hash changes (e.g., user navigates back)
$(window).on('hashchange', function() {
    table.rows().every(function() {
        var row = this.node();
        $(row).show().removeClass('highlighted');
    });
    highlightRow();
});

// Handle the display of the login form when the "Order" button is clicked
$('.order-button').click(function(e) {
    e.preventDefault();
    $('#loginForm').modal('show');
    $('html, body').animate({
        scrollTop: $('#loginForm').offset().top
    }, 500);
});

// Close the login form
$('#closeLoginForm').click(function() {
    $('#loginForm').modal('hide');
});

// Toggle menu for mobile
$('.menu-btns').click(function() {
    $('#menu').toggleClass('active');
});
 // Show Edit Product Form
 $('.edit-button').click(function(event) {
    event.preventDefault();
    var productId = $(this).data('id'); // Get the product ID from the data attribute

    // Fetch product details using AJAX
    $.ajax({
        url: 'fetch_product.php',
        type: 'GET',
        data: { id: productId },
        success: function(response) {
            var product = JSON.parse(response);
            
            // Populate the form fields with product details
            $('#editProductId').val(product.id);
            $('#editName').val(product.name);
            $('#editDescription').val(product.description);
            $('#editPrice').val(product.price);
            $('#editImagePreview').attr('src', 'uploads/' + product.image);
            $('#existingImage').val(product.image);
            
            // Show the edit form
            $('#editForm').fadeIn();
        },
        error: function(error) {
            console.log('Error fetching product details:', error);
        }
    });
});

// Close Edit Product Form
$('#closeEditForm').click(function() {
    $('#editForm').fadeOut();
});
