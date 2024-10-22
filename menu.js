const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');
const icon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle the menu visibility
    icon.classList.toggle('fa-bars');   // Toggle the bar icon
    icon.classList.toggle('fa-times');  // Toggle the close icon
});
