const hamburger = document.querySelector('.menu-button');
const closebtn = document.querySelector('.closebtn');
const navmenu = document.querySelector('.design-menu');
const link = document.querySelectorAll('.link');

hamburger.addEventListener('click', () => {
  navmenu.classList.remove('invisible');
});

closebtn.addEventListener('click', () => {
  navmenu.classList.add('invisible');
});

for (let i = 0; i < link.length; i += 1) {
  link[i].addEventListener('click', () => {
    navmenu.classList.add('invisible');
  });
}

const email = document.getElementById('email');
const errorMessage = document.getElementById('error');
const form = document.getElementById('form');
const isLowerCase = (str) => /[a-z]/.test(str) && !/[A-Z]/.test(str);
