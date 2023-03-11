//DOM chargement
//window.addEventListener("DOMContentLoaded", () => {
//creation des variables
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const bulletsPointContainer = document.querySelector(".dots");
const slides = [
  {
    id: 0,
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    id: 1,
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    id: 2,
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    id: 3,
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

//comptage des slides
const totalSlide = slides.length;

//mis en place d'un eventListener sur les fleches
leftArrow.addEventListener("click", (e) => {
  changeSlide(-1);
});

rightArrow.addEventListener("click", (e) => {
  changeSlide(1);
});

//bullet
for (let index = 0; index < totalSlide; index++) {
  const bulletPoint = document.createElement("div");
  //on rattache notre element a la div #dots
  bulletsPointContainer.appendChild(bulletPoint);
  //on injecte la class dot a chaque div crée
  bulletPoint.classList.add("dot");
  //on créer une condition pour que le premier bullet point soit actif des le chargement de la page
  if (index === 0) {
    bulletPoint.classList.add("dot_selected");
  }
}

let slideEnCours = 0;

//function principale du slider
function changeSlide(sens) {
  //on ajoute a numeroSlide 1 ou -1 en fonction du bouton cliquez
  slideEnCours = sens + slideEnCours;

  //on fait en sorte que quand le premier slide est afficher et que l'on clique sur left on affiche le slide 4
  if (slideEnCours < 0) {
    slideEnCours = totalSlide - 1;
  }
  // si c'est le slide 4 on revient au premier slide
  if (slideEnCours >= totalSlide) {
    slideEnCours = 0;
  }
  //on appelle les fonctions qui gere le changement de src, de tagline, et de bulletpoint
  slide(slideEnCours);
  changeTexte(slideEnCours);
  bulletPointActif(slideEnCours);
}
//fonction qui fait varier le src du slide
function slide(slideEnCours) {
  //on creer la variable slide
  let slide = document.querySelector(".banner-img");
  //on modifie le src du slide en fonction de la variable slideEncours
  slide.src = "./assets/images/slideshow/" + slides[slideEnCours].image;
}

function changeTexte(slideEnCours) {
  //on creer la variable qui va contenir le texte du slide
  let textSlide = document.querySelector("p");
  //on injecte du contenu dans text slide en fonction de numeroSlide
  textSlide.innerHTML = slides[slideEnCours].tagLine;
}

//fonction qui gere les bullets point actif ou inactif
function bulletPointActif(slideEnCours) {
  //declaration des variables
  let activeBulletPoint = bulletsPointContainer.children[slideEnCours];
  let inactifBulletPoint = document.querySelector(".dot_selected");

  activeBulletPoint.classList.add("dot_selected");
  inactifBulletPoint.classList.remove("dot_selected");
}
/*
//});
if (slides) {
  setTimeout(() => {}, timeout);
} else {
}

setTimeout(() => {
  slides;
  console.log("hello");
}, 2000);
*/
