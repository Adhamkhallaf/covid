$(document).ready(function () {
    // Show the button when the user scrolls down 100px from the top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scrollTopButton').fadeIn();
        } else {
            $('#scrollTopButton').fadeOut();
        }
    });

    // Scroll to the top when the button is clicked
    $('#scrollTopButton').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const dark = document.getElementById('dark');

    // Check for saved theme preference in localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Save the current theme preference in localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});
