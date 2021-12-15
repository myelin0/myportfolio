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

const projects = [
  {
    name: 'Profesional Art Printing Data',
    languages: ['Html', 'bootstrap', 'Ruby'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    livelink: 'https://myelin0.github.io/myportfolio/',
    repository: 'https://github.com/myelin0/myportfolio',
  },
  {
    name: 'Profesional Art Printing Data',
    languages: ['Html', 'bootstrap', 'Ruby'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    livelink: 'https://myelin0.github.io/myportfolio/',
    repository: 'https://github.com/myelin0/myportfolio',
  },
  {
    name: 'Profesional Art Printing Data',
    languages: ['Html', 'bootstrap', 'Ruby'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    livelink: 'https://myelin0.github.io/myportfolio/',
    repository: 'https://github.com/myelin0/myportfolio',
  },
  {
    name: 'Profesional Art Printing Data',
    languages: ['Html', 'bootstrap', 'Ruby'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    livelink: 'https://myelin0.github.io/myportfolio/',
    repository: 'https://github.com/myelin0/myportfolio',
  }];

  function viewProject() {
    projects.forEach((project, index) => {
      let language = '';
      project.languages.forEach((lang) => {
        language += `<li>${lang}</li>`;
      });
     document.querySelector('.d-grid').innerHTML += `
     <li class="card card1">
          <img class="photoshoot-1" src="images/Snapshoot1.png" alt="My projects snapshot">
          <img class="photoshoot-D-1" src="images/Snapshoot-D-122kb.png" alt="">
          <div class="card-info">
            <h3 class="h3-m">Tonic</h3>
            <ul class="canopy">
              <li class="canopy-li">CANOPY</li>
              <li class="common">Back End Dev</li>
              <li class="common">2015</li>

            </ul>
            <p class="card-p ">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
            <p class="fcb-p ">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>

            <ul class="languages-btn">
              <li class="btn"><button>html</button></li>
              <li class="btn"><button>css</button></li>
              <li class="btn"><button>javascript</button></li>
            </ul>
            <button type="button" class="big-btn">See Project</button>
          </div>
        </li>
        <li class="card card4 swap">
          <img class="photoshoot-2" src="images/Snapshoo2.png" alt="My projects snapshot">
          <img class="photoshoot-D-2" src="images/Snapshoot-D-2.png"  alt="">
          <div class="card-info ">
            <h3 id="mob">Multi-Post<br>
              Stories</h3>
            <h3 class="uber">Uber Navigation</h3>

            <ul class="canopy disable">
              <li class="canopy-li">CANOPY</li>
              <li class="common">Back End Dev</li>
              <li class="common">2015</li>
            </ul>
            <ul class="facebook">
              <li class="canopy-li">UBER</li>
              <li class="common">Lead Developer</li>
              <li class="common">2018</li>
            </ul>
            
            <p class="card-p">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
            <p class="fcb-p">A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.</p>
            <ul class="languages-btn">
              <li class="btn"><button>html</button></li>
              <li class="btn ruby"><button>Ruby on Rails</button></li>
              <li class="btn"><button>css</button></li>
              <li class="btn"><button>javascript</button></li>
            </ul>
            <button type="button" class="big-btn">See Project</button>
          </div>
        </li>`;
    });
  }

viewProject();