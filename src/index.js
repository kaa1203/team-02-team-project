const navButton = document.getElementById('navButton');
const navMenu = document.getElementById('navMenu');
const navClose = document.getElementById('navClose');
const navList = document.getElementsByClassName('nav-menu-list');

navButton.addEventListener('click', function () {
    navMenu.classList.toggle("is-hidden");
});

navClose.addEventListener('click', function () {
    navMenu.classList.toggle("is-hidden");
});

navList[0].addEventListener('click', function () {
    navMenu.classList.toggle("is-hidden");
});