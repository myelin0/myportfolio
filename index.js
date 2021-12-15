const hamburger = document.querySelector('.menu-button');
const closebtn = document.querySelector('.closebtn');
const navmenu = document.querySelector('.menu-links');
const navportal = document.querySelector('.po');
const navabout = document.querySelector('.ab');
const navcontact = document.querySelector('.co');
const ul = document.getElementById('list-cards');

// hamburger.addEventListener('click', () => {
//   navmenu.classList.toggle('show');
// });

// closebtn.addEventListener('click', () => {
//   navmenu.style.display = 'none';
// });

// navportal.addEventListener('click', () => {
//   navmenu.style.display = 'none';
// });

// navabout.addEventListener('click', () => {
//   navmenu.style.display = 'none';
// });

// navcontact.addEventListener('click', () => {
//   navmenu.style.display = 'none';
// });
// const card=document.querySelector('.card')
// document.createElement('div');
// div.appendChild(card);
// console.log(div)

//The PopUp Details project//
const cards = [
  {
    name: "Tonic",
    img: "images/Snapshoot1.png",
    companyName: "CANOPY",
    job: "Back End Dev",
    year: 2015,
    decription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tags: ["html", "css", "javaScript"],
    button: "See Project",
  },

  {
    name: "Multi-Post Stories",
    img: "images/Snapshoo2.png",
    companyName: "FACEBOOK",
    job: "Full Stack Dev",
    year: 2015,
    decription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tags: ["html", "Ruby on rails", "css", "javaScript"],
    button: "See Project",
  },

  {
    name: "Facebook 360",
    img: "images/Snapshoot3.png",
    companyName: "FACEBOOK",
    job: "Full Stack Dev",
    year: 2015,
    decription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tags: ["html", "Ruby on rails", "css", "javaScript"],
    button: "See Project",
  },
  {
    name: "Uber Navigation",
    img: "images/Snapshoot4.png",
    companyName: "Uber",
    job: "Lead Developer",
    year: 2018,
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    tags: ["html", "Ruby on rails", "css", "javaScript"],
    button: "See Project",
  },
];


 cards.forEach((card) => {
  
   let languages = '';
   card.tags.forEach((lang) => {
     languages += `<li class="btn"><button>${lang}</button></li>`
   })
     const template = document.createElement('template');

     const btn = document.createElement('button');
     btn.className = 'big-btn';
     btn.innerText = card.button;
     btn.addEventListener('click', () => {
       // add function
     })
     
     template.innerHTML = ` <ul id="Portfolio" class="d-grid">
     <li class="card mbylle card1">
          <img class="photoshoot-1" src="${card.img}" alt="My projects snapshot">
          <img class="photoshoot-D-1" src="${card.img}" alt="">
          <div class="card-info">
            <h3 class="h3-m">${card.name}</h3>
            <ul class="canopy">
              <li class="canopy-li">${card.companyName}</li>
              <li class="common">${card.job}</li>
              <li class="common">${card.year}</li>

            </ul>
            <p class="card-p ">${card.description}</p>
            <p class="fcb-p ">${card.description}</p>
            <ul class="languages-btn">
              ${languages}
            </ul>
            <button type="button" class="big-btn">See Project</button>
          </div>
          </li>
          </ul>
     `;
    
    // const populate= template.content.firstChild;
    //  populate.childNodes[1].appendChild(btn);
    
   
    ul.appendChild(template.content.firstChild);
  //  })
 }) 
 


// const projects = [
//   {
//     name: 'Profesional Art Printing Data',
//     languages: ['Html', 'bootstrap', 'Ruby'],
//     description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
//     livelink: 'https://myelin0.github.io/myportfolio/',
//     repository: 'https://github.com/myelin0/myportfolio',
//   },
//   {
//     name: 'Profesional Art Printing Data',
//     languages: ['Html', 'bootstrap', 'Ruby'],
//     description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
//     livelink: 'https://myelin0.github.io/myportfolio/',
//     repository: 'https://github.com/myelin0/myportfolio',
//   },
//   {
//     name: 'Profesional Art Printing Data',
//     languages: ['Html', 'bootstrap', 'Ruby'],
//     description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
//     livelink: 'https://myelin0.github.io/myportfolio/',
//     repository: 'https://github.com/myelin0/myportfolio',
//   },
//   {
//     name: 'Profesional Art Printing Data',
//     languages: ['Html', 'bootstrap', 'Ruby'],
//     description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
//     livelink: 'https://myelin0.github.io/myportfolio/',
//     repository: 'https://github.com/myelin0/myportfolio',
//   }];

//   function viewProject() {
//     projects.forEach((project, index) => {
//       let language = '';
//       project.languages.forEach((lang) => {
//         language += `<li>${lang}</li>`;
//       });
//      document.querySelector('.d-grid').innerHTML += `
//      <li class="card card1">
//           <img class="photoshoot-1" src="images/Snapshoot1.png" alt="My projects snapshot">
//           <img class="photoshoot-D-1" src="images/Snapshoot-D-122kb.png" alt="">
//           <div class="card-info">
//             <h3 class="h3-m">Tonic</h3>
//             <ul class="canopy">
//               <li class="canopy-li">CANOPY</li>
//               <li class="common">Back End Dev</li>
//               <li class="common">2015</li>

//             </ul>
//             <p class="card-p ">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
//             <p class="fcb-p ">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>

//             <ul class="languages-btn">
//               <li class="btn"><button>html</button></li>
//               <li class="btn"><button>css</button></li>
//               <li class="btn"><button>javascript</button></li>
//             </ul>
//             <button type="button" class="big-btn">See Project</button>
//           </div>
//         </li>
//         <li class="card card4 swap">
//           <img class="photoshoot-2" src="images/Snapshoo2.png" alt="My projects snapshot">
//           <img class="photoshoot-D-2" src="images/Snapshoot-D-2.png"  alt="">
//           <div class="card-info ">
//             <h3 id="mob">Multi-Post<br>
//               Stories</h3>
//             <h3 class="uber">Uber Navigation</h3>

//             <ul class="canopy disable">
//               <li class="canopy-li">CANOPY</li>
//               <li class="common">Back End Dev</li>
//               <li class="common">2015</li>
//             </ul>
//             <ul class="facebook">
//               <li class="canopy-li">UBER</li>
//               <li class="common">Lead Developer</li>
//               <li class="common">2018</li>
//             </ul>
            
//             <p class="card-p">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
//             <p class="fcb-p">A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.</p>
//             <ul class="languages-btn">
//               <li class="btn"><button>html</button></li>
//               <li class="btn ruby"><button>Ruby on Rails</button></li>
//               <li class="btn"><button>css</button></li>
//               <li class="btn"><button>javascript</button></li>
//             </ul>
//             <button type="button" class="big-btn">See Project</button>
//           </div>
//         </li>`;
//     });
//   }

// viewProject();