document.addEventListener("DOMContentLoaded", function () {
    // get all the <a> elements in the navigation
    const navLinks = document.querySelectorAll('nav a');

    // loop through each <a> element & check if it matches the current page's URL
    navLinks.forEach(link => {
        // if the href attribute matches the current page's path
        if (link.href === window.location.href) {
            // add the 'active' class to highlight the current page
            link.classList.add('active');
        }
    });
});
