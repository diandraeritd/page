// script.js
document.getElementById('hamburger-menu').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.dropdown > a').forEach(function(dropdownLink) {
    dropdownLink.addEventListener('click', function(e) {
        e.preventDefault();
        var dropdownMenu = this.nextElementSibling;
        dropdownMenu.classList.toggle('active');
    });
});
