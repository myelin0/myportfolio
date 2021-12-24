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

/// form validation///

const errorMessage = document.getElementById('show-error');
const form = document.forms['contact-form'];
const mail = form.email;
const LowerCase = (str) => /[a-z]/.test(str) && !/[A-Z]/.test(str);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = mail.value;
  if (!LowerCase(email)) {
    errorMessage.style.display = 'block';
    setTimeout(() => {
      errorMessage.style.display = 'none';
    }, 3000);
  } else {
    errorMessage.style.display = 'none';
    form.submit();
  }
});
