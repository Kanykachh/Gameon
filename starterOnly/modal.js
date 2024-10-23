// Fonction pour gérer la barre de navigation responsive
function editNav() {
  const x = document.getElementById("myTopnav"); 
  if (x.className === "topnav") { 
    x.className += " responsive"; 
  } else {
    x.className = "topnav"; 
  }
}

const modalbg = document.querySelector(".bground"); // La modale en arrière-plan
const modalBtn = document.querySelectorAll(".modal-btn"); // Les boutons pour ouvrir la modale
const closeBtn = document.querySelector(".close"); // Le bouton de fermeture de la modale

// Lance la modale lorsque les boutons sont cliqués
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block"; // Affiche la modale
}

// Fonction pour fermer la modale
function closeModal(event) {
  console.log(event)
  modalbg.style.display = "none";
  displayForm() // Cache la modale
}

closeBtn.addEventListener("click", closeModal); // Ajoute un écouteur d'événement au bouton span de fermeture

const form = document.querySelector("form");

// Sélectionner tous les champs de texte du formulaire
const inputs = document.querySelectorAll(".text-control");

// Fonction de validation
function validate() {
  let valid = true; // Variable pour suivre si le formulaire est valide

  // Validation des champs de texte (prénom, nom, etc.)
  inputs.forEach((input) => {
    const errorMessage = input.nextElementSibling; // Message d'erreur à côté de l'input

    if (input.value.trim() === "") { // Si le champ est vide
      valid = false; // Définit le formulaire comme invalide
      input.classList.add("error"); // Ajoute la classe 'error'

      if (!errorMessage || !errorMessage.classList.contains("error-message")) {
        const errorSpan = document.createElement("span");
        errorSpan.classList.add("error-message");
        errorSpan.textContent = "Ce champ est requis.";
        input.after(errorSpan); // Ajoute un message d'erreur
      }
    } else {
      input.classList.remove("error"); // Retire l'erreur si le champ est rempli
      if (errorMessage && errorMessage.classList.contains("error-message")) {
        errorMessage.remove(); // Supprime le message d'erreur si corrigé
      }
    }
  });
  // Validation pour la sélection d'une ville
  const locationInputs = document.querySelectorAll('input[name="location"]');
  const locationError = document.querySelector(".location-error-message");
  let locationSelected = false;

  locationInputs.forEach((input) => {
    if (input.checked) {
      locationSelected = true;
    }
  });

  if (!locationSelected) {
    valid = false;
    if (!locationError) {
      const errorSpan = document.createElement("span");
      errorSpan.classList.add("error-message", "location-error-message");
      errorSpan.textContent = "Une ville doit être sélectionnée.";
      locationInputs[locationInputs.length - 1].parentElement.after(errorSpan);
    }
  } else {
    if (locationError) {
      locationError.remove();
    }
  }

  // Validation pour la case à cocher des conditions d'utilisation
  const checkbox1 = document.getElementById("checkbox1");
  const checkboxError = document.querySelector(".checkbox1-error-message");

  if (!checkbox1.checked) {
    valid = false;
    if (!checkboxError) {
      const errorSpan = document.createElement("span");
      errorSpan.classList.add("error-message", "checkbox1-error-message");
      errorSpan.textContent = "Cocher j'ai lu et accepté les conditions d'utilisation.";
      checkbox1.parentElement.after(errorSpan);
    }
  } else {
    if (checkboxError) {
      checkboxError.remove();
    }
  }

  // Autres validations (cases à cocher, sélection de tournoi) sont similaires...
  
  return valid; // Retourne vrai si tout est valide, sinon faux
}

// Fonction pour afficher le message de confirmation et bouton rouge
function showConfirmation() {
  const modalContent = document.querySelector(".modal-body"); // Cible la div du contenu de la modal
  displayConfirmation()

  // Ajout de la classe "success" pour changer le style
  modalContent.classList.add("success");

  // Ajoute un écouteur d'événement au nouveau bouton de fermeture
  const closeBtn = document.querySelector(".btn-close");
  closeBtn.addEventListener("click", closeModal);
  //displayForm() // Ferme la modale avec le bouton rouge
}

// Événement de soumission du formulaire
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche le comportement par défaut (soumission de page)
  if (validate()) {
    showConfirmation(); // Affiche le message de confirmation si la validation est réussie
  }
});

function displayForm() {
  const modalContentForm = document.querySelector(".modal-body-form");
  const modalContentConfirmation = document.querySelector(".modal-body-confirmation");
  const modalBody = document.querySelector(".modal-body");


  modalContentConfirmation.classList.add("disabled");
  modalContentForm.classList.remove("disabled");
  modalBody.classList.remove("success");
}

function displayConfirmation() {
  const modalContentForm = document.querySelector(".modal-body-form");
  const modalContentConfirmation = document.querySelector(".modal-body-confirmation");

  modalContentForm.classList.add("disabled");
  modalContentConfirmation.classList.remove("disabled");
}


