/* 
// local reviews data
const reviews = [
    {
      id: 1,
      name: "ACEVEDO LÓPEZ ABRAHAM",
      job: "Scrum Master/Programador/Diseñador",
      img:
        "https://raw.githubusercontent.com/AriadnaPHdez/PAKILISTLI/main/pic-rutinas/abraham.jpg",
      text:
        "Administrar y controlar los recursos del proyecto/Programación de la aplicación móvil.",
       
    },
    {
      id: 2,
      name: "Cervantes Acosta Héctor Iván",
      job: "Analista/Programador/Tester",
      img:
        "https://raw.githubusercontent.com/AriadnaPHdez/PAKILISTLI/main/pic-rutinas/hector.png",
      text:
        "Combración del funcionamiento correcto de acuerdo a los requisitos funcionales de la aplicación móvil y plataforma web. / Programación de la aplicación móvil.",
   
    },
    {
      id: 3,
      name: "Pérez Hernández Ariadna",
      job: "Programador/Documentador/Diseñador",
      img:
        "https://raw.githubusercontent.com/AriadnaPHdez/PAKILISTLI/main/pic-rutinas/ariadna.png",
      text:
        "Diseño y programación de interfaces del sitio web/Documentador de procesos",
        
    },
   
  ]; */


  // local reviews data
const reviews = [
  {
    id: 1,
      name: "ACEVEDO LÓPEZ ABRAHAM",
      job: "Scrum Master/Programador/Diseñador",
      img:
        "https://raw.githubusercontent.com/AriadnaPHdez/PAKILISTLI/main/pic-rutinas/abraham.jpg",
      text:
        "Administrar y controlar los recursos del proyecto/Programación de la aplicación móvil.",
  },
  {
    id: 2,
      name: "Cervantes Acosta Héctor Iván",
      job: "Analista/Programador/Tester",
      img:
        "https://raw.githubusercontent.com/AriadnaPHdez/PAKILISTLI/main/pic-rutinas/hector.png",
      text:
        "Combración del funcionamiento correcto de acuerdo a los requisitos funcionales de la aplicación móvil y plataforma web. / Programación de la aplicación móvil.",
  },
  {
    id: 3,
    name: "Pérez Hernández Ariadna",
    job: "Programador/Documentador/Diseñador",
    img:
      "https://raw.githubusercontent.com/AriadnaPHdez/PAKILISTLI/main/pic-rutinas/ariadna.png",
    text:
      "Diseño y programación de interfaces del sitio web/Documentador de procesos",
  },
  
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});