const hamburger = document.querySelector('.menu-button');
const closebtn = document.querySelector('.closebtn');
const navmenu = document.querySelector('.menu-links');
const navportal = document.querySelector('.po');
const navabout = document.querySelector('.ab');
const navcontact = document.querySelector('.co');

hamburger.addEventListener('click', () => {
  navmenu.classList.toggle('show');
});

closebtn.addEventListener('click', () => {
  navmenu.style.display = 'none';
});

navportal.addEventListener('click', () => {
  navmenu.style.display = 'none';
});

navabout.addEventListener('click', () => {
  navmenu.style.display = 'none';
});

navcontact.addEventListener('click', () => {
  navmenu.style.display = 'none';
});
