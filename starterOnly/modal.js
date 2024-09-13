// Fonction pour gérer la barre de navigation responsive
function editNav() {
  const x = document.getElementById("myTopnav"); // Sélectionne la barre de navigation
  if (x.className === "topnav") { // Vérifie si la classe actuelle est "topnav"
    x.className += " responsive"; // Ajoute la classe "responsive" pour la vue mobile
  } else {
    x.className = "topnav"; // Sinon, réinitialise la classe à "topnav"
  }
}

// Sélectionne les éléments du DOM
const modalbg = document.querySelector(".bground"); // La modale en arrière-plan
const modalBtn = document.querySelectorAll(".modal-btn"); // Les boutons pour ouvrir la modale
const closeBtn = document.querySelector(".close"); // Le bouton de fermeture de la modale

// Lance la modale lorsque les boutons sont cliqués
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fonction pour afficher la modale
function launchModal() {
  modalbg.style.display = "block"; // Rend la modale visible
}

// Fonction pour fermer la modale
function closeModal() {
  modalbg.style.display = "none"; // Cache la modale
}

// Ajoute un événement pour fermer la modale lorsque le bouton de fermeture est cliqué
closeBtn.addEventListener("click", closeModal);




