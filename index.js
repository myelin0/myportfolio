const hamburger = document.querySelector('.menu-button');
const closebtn = document.querySelector('.closebtn');
const navmenu = document.querySelector('.menu-links');

hamburger.addEventListener('click', () => {
  navmenu.classList.toggle('show');
});

closebtn.addEventListener('click', () => {
  navmenu.style.display = 'none';
});