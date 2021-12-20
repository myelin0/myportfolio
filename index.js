const hamburger = document.querySelector('.menu-button');
const closebutton = document.querySelector('.closebtn');
const navmenu = document.querySelector('.design-menu');
const link = document.querySelectorAll('.link');

hamburger.addEventListener('click', () => {
  navmenu.classList.remove('invisible');
});

closebutton.addEventListener('click', () => {
  navmenu.classList.add('invisible');
});

for (let i = 0; i < link.length; i += 1) {
  link[i].addEventListener('click', () => {
    navmenu.classList.add('invisible');
  });
}
