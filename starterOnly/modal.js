function editNav() {
  const x = document.getElementById("myTopnav"); 
  if (x.className === "topnav") { 
    x.className += " responsive"; 
  } else {
    x.className = "topnav"; 
  }
}

const modalbg = document.querySelector(".bground"); 
const modalBtn = document.querySelectorAll(".modal-btn"); 
const closeBtn = document.querySelector(".close"); 

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  modalbg.style.display = "block"; 
}
// Fonction pour fermer la modal
function closeModal(event) {
  console.log(event)
  modalbg.style.display = "none";
  displayForm() 
}
closeBtn.addEventListener("click", closeModal); 

const form = document.querySelector("form");
const inputs = document.querySelectorAll(".text-control");

// Fonction de validation
function validate() {
  let valid = true; 
   // Regex pour chaque champ et description en commentaire
  const firstNameRegex = /^[a-zA-Z]{2,}$/; // Prénom : au moins 2 caractères alphabétiques
  const lastNameRegex = /^[a-zA-Z]{2,}$/;  // Nom : au moins 2 caractères alphabétiques
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email : format valide
  const quantityRegex = /^[0-9]+$/; // Quantité : chiffres seulement

  inputs.forEach((input) => {
    const errorMessage = input.nextElementSibling; 
    input.classList.remove("error"); 
    if (errorMessage && errorMessage.classList.contains("error-message")) {
      errorMessage.remove(); 
    }

    if (input.value.trim() === "") {
      valid = false;
      input.classList.add("error"); 
      const errorSpan = document.createElement("span");
      errorSpan.classList.add("error-message");
      errorSpan.textContent = "Ce champ est requis.";
      input.after(errorSpan); 
    } else {
      // Validation par regex
      if (input.id === "first" && !firstNameRegex.test(input.value)) {
        valid = false;
        input.classList.add("error");
        const errorSpan = document.createElement("span");
        errorSpan.classList.add("error-message");
        errorSpan.textContent = "Deux caractères minimum sont requis.";
        input.after(errorSpan);
      } else if (input.id === "last" && !lastNameRegex.test(input.value)) {
        valid = false;
        input.classList.add("error");
        const errorSpan = document.createElement("span");
        errorSpan.classList.add("error-message");
        errorSpan.textContent = "Deux caractères minimum sont requis.";
        input.after(errorSpan);
      } else if (input.id === "email" && !emailRegex.test(input.value)) {
        valid = false;
        input.classList.add("error");
        const errorSpan = document.createElement("span");
        errorSpan.classList.add("error-message");
        errorSpan.textContent = 'Veuillez inclure "@" dans l adresse mail ';
        input.after(errorSpan);
      } else if (input.id === "quantity" && !quantityRegex.test(input.value)) {
        valid = false;
        input.classList.add("error");
        const errorSpan = document.createElement("span");
        errorSpan.classList.add("error-message");
        errorSpan.textContent = "Veuillez indiquer le nombre de tournois.";
        input.after(errorSpan);
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

  return valid; 
}




function showConfirmation() {
  const modalContent = document.querySelector(".modal-body"); 
  displayConfirmation()

 
  modalContent.classList.add("success");

 
  const closeBtn = document.querySelector(".btn-close");
  closeBtn.addEventListener("click", closeModal);
  //displayForm() // Ferme la modale avec le bouton rouge
}

// Événement de soumission du formulaire
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche le comportement par défaut (soumission de page)
  if (validate()) {
    showConfirmation(); 
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


