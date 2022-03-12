const hamburger = document.querySelector('.menu-button');
const closebtn = document.querySelector('.closebtn');
const navmenu = document.querySelector('.menu-links');
const navportal = document.querySelector('.po');
const navabout = document.querySelector('.ab');
const navcontact = document.querySelector('.co');
const ul = document.getElementById('Portfolio');

hamburger.addEventListener('click', () => {
  navmenu.classList.toggle('show');
});

closebtn.addEventListener('click', () => {
  navmenu.classList.toggle('show');
});

navportal.addEventListener('click', () => {
  navmenu.classList.toggle('show');
});

navabout.addEventListener('click', () => {
  navmenu.classList.toggle('show');
});
navcontact.addEventListener('click', () => {
  navmenu.classList.toggle('show');
});

const cards = [
  {
    id: 1,
    name: 'Bulza Festival',
    img: 'images/FestivalPage_Desk.png',
    imgd: 'images/FestivalPage_Desk.png',
    companyName: 'Emi',
    job: 'Front End Dev',
    year: 2021,
    t: 'Bulza Festival is website for an imaginary festival built with HTml & Css',
    description:
      'This festival page is my first try at building a web page with HTML/CSS & JavaScript.It is the first capstone project in Microverse Curriculum.The festival is fictional ,but the desire to see it coming to life (even just in a website form) motivated me to build it as best I could in the amount of time of 5days.',
    tags: ['html', 'css', 'javaScript'],
    button: 'See Project',
  },

  {
    id: 2,
    name: 'Multi-Post Stories',
    img: 'images/Snapshoo2.png',
    imgd: 'images/Snapshoot4.png',
    companyName: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: 2015,
    t: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, . ',
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
    button: 'See Project',
  },

  {
    id: 3,
    name: 'Facebook 360',
    img: 'images/Snapshoot3.png',
    imgd: 'images/Snapshoot3.png',
    companyName: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: 2015,
    t: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.  .',
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
    button: 'See Project',
  },
  {
    id: 4,
    name: 'Uber Navigation',
    img: 'images/Snapshoot4.png',
    imgd: 'images/Snapshoot4.png',
    companyName: 'Uber',
    job: 'Lead Developer',
    year: 2018,
    t: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
    button: 'See Project',
  },
];

function init() {
  for (let k = 0; k < cards.length; k += 1) {
    const card = cards[k];
    const template = document.createElement('template');
    let languages = '';
    card.tags.forEach((lang) => {
      languages += `<li class="btn"><button>${lang}</button></li>`;
    });
    if (card.id % 2 === 0) {
      template.innerHTML = `
    <li class="card ">
    <img class="photoshoot-1" src="${card.img}" alt="My projects snapshot">
    <img class="FestivalPage_Desk reverse" src="${card.imgd}" alt="">
    <div class="card-info ">
      <h3 class="h3-m">${card.name}</h3>
      <ul class="canopy">
        <li class="canopy-li">${card.companyName}</li>
        <li class="common">${card.job}</li>
        <li class="common">${card.year}</li>
      </ul>
      <p class="card-p ">${card.t}</p>
      <p class="fcb-p ">${card.description}</p>
      <ul class="languages-btn ">
        ${languages}
      </ul>
      <button data-modal-target="#modal${card.id}" type="button" class="big-btn">${card.button}</button>
    </div>
    </li>`;
    } else {
      template.innerHTML = `
    <li class="card">
    <img class="photoshoot-1" src="${card.img}" alt="My projects snapshot">
    <img class="photoshoot-D-1" src="${card.imgd}" alt="">
    <div class="card-info">
      <h3 class="h3-m">${card.name}</h3>
      <ul class="canopy">
        <li class="canopy-li">${card.companyName}</li>
        <li class="common">${card.job}</li>
        <li class="common">${card.year}</li>
      </ul>
      <p class="card-p ">${card.t}</p>
      <p class="fcb-p ">${card.description}</p>
      <ul class="languages-btn ">
        ${languages}
      </ul>
      <button data-modal-target="#modal${card.id}" type="button" class="big-btn">${card.button}</button>
    </div>
    </li>`;
    }
    ul.appendChild(template.content);
  }
}

window.onload = init();

//  *********************************************************  ///
// create a modal
cards.forEach((work) => {
  const overlayContainer = document.createElement('div');
  overlayContainer.id = 'overlay';
  const modalContainer = document.createElement('div');
  modalContainer.id = `modal${work.id}`; // modal1
  modalContainer.classList.add('modal');
  const modalContent = `
      <div class="modal-header">
        <div class="title">${work.name}</div>
        <button data-close-button class="close-button">&times;</button>
      </div>
      <img class="photoshoot-1 modal-img" src="${work.img}" alt="My projects snapshot">
      <img class="photoshoot-D-1 photo " src="${work.img}" alt="">
     
      
      <ul class="works-list-project modal-list">
          <li>${work.companyName}</li>
          <li>${work.job}</li>
          <li>${work.year}</li>
      </ul>
      <div class="modal-body">
      <div class="modal-detail">${work.t} </div>
       <div class="modal-btns">
          <ul class="works-list-skills skills-modal">
              <li>${work.tags[0]}</li>
              <li>${work.tags[1]}</li>
              <li>${work.tags[2]}</li>
          </ul>
       <div>
          <div class="line"></div>
          <a href="https://myelin0.github.io/Festival-Page/" class="popup-btn font-f see-live">See Live<span><i
                        class="fa fa-external-link"></i></span></a>
          <a href="https://git@github.com:myelin0/Festival-Page.git" class="popup-btn font-f see-source">See Source<span><i class="fa fa-github"></i></span></a>
       </div>
       </div>
      </div>`;
  modalContainer.innerHTML = modalContent;
  document.body.appendChild(modalContainer);
  document.body.appendChild(overlayContainer);
});

const modalOpenButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.getElementById('overlay');
function modalOpen(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
  // worksContainer.classList.add('blur');
}
modalOpenButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalChoose = document.querySelector(`${button.dataset.modalTarget}`);
    modalOpen(modalChoose);
  });
});

const modalCloseButtons = document.querySelectorAll('[data-close-button]');
function modalClose(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
  // worksContainer.classList.remove('blur');
}
modalCloseButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalChoose = button.closest('.modal');
    modalClose(modalChoose);
  });
});
