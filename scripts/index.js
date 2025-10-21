import {enableValidation} from "./validate.js";
document.addEventListener("DOMContentLoaded", () => {
  const abrirModal = document.getElementById("abrirModal");
  const popup = document.getElementById("edit-perfil");
  const cerrarModal = document.querySelector(".popup__close");
  const nameInput = document.querySelector("#input-name");
  const aboutInput = document.querySelector("#input-about");
  const titlePerfile = document.querySelector(".perfile-title");
  const descriptionPerfile = document.querySelector(".perfile-description");

  const formProfile = popup.querySelector("form");

  //este codigo es de el +
  const abrirModal2 = document.getElementById("abrirModal2");
  const popup2 = document.getElementById("edit-perfil2");
  const cerrarModal2 = document.querySelector(".popup__close2");
  const titleInput2 = document.querySelector("#input-title2");
  const aboutInput2 = document.querySelector("#input-about2");
  const formAddCard = popup2.querySelector("form");

  const template = document.querySelector(".template").content;
  const gallery = document.querySelector(".gallery");
  
// Seleccionar elementos
const popup3 = document.getElementById("imagePopup");
const popupImage = document.querySelector(".popup__image");
const popupDescription = document.querySelector(".popup__descrition");
const closeBtn = document.querySelector(".popup__close3");

// Cerrar popup al hacer clic en la X
closeBtn.addEventListener("click", () => {
//  popup3.style.display = "none";
popup3.classList.remove('popup_opened')
});

// Cerrar popup al hacer clic fuera del contenido
popup3.addEventListener("click", (e) => {
  if (e.target === popup3) {
    popup3.classList.remove('popup_opened')
  }
});

  const initialCards = [
    {
      name: "Valle de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
    },
    {
      name: "Montañas Calvas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
    },
  ];

  function createCard(name, link) {
    const newCard = template.querySelector(".gallery-item").cloneNode(true);
    newCard.querySelector(".gallery-item__image").src = link;
    newCard.querySelector(".gallery-item__image").alt = name;
    newCard.querySelector(".gallery-item__text").textContent = name;
    const cardLike = newCard.querySelector(".card-like");
    cardLike.addEventListener("click", () => {
      if (!cardLike.classList.contains("active")) {
        cardLike.classList.add("active");
      } else {
        cardLike.classList.remove("active");
      }
    });

    newCard.querySelector(".gallery-item__image").addEventListener('click', function() {
      popup3.classList.add('popup_opened');
      popupImage.src = link;
      popupImage.alt = name;
      popupDescription.textContent = name;
    })

    const trash = newCard.querySelector(".trash");
    trash.addEventListener("click", function () {
      this.parentElement.remove(); // elimina toda la tarjeta
    });

    return newCard;
  }

  initialCards.forEach((item) => {
    const newCard = createCard(item.name, item.link);
    gallery.append(newCard);
  });
  

  //lapiz
  abrirModal.addEventListener("click", () => {
    popup.classList.add("popup_opened");
    nameInput.value = titlePerfile.textContent;
    aboutInput.value = descriptionPerfile.textContent;
  });

  cerrarModal.addEventListener("click", () => {
    popup.classList.remove("popup_opened");
  });

  // este codigo es del +

  abrirModal2.addEventListener("click", () => {
    popup2.classList.add("popup_opened2");
  });

  cerrarModal2.addEventListener("click", () => {
    popup2.classList.remove("popup_opened2");
  });
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input2",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible"
});
  //basurero

  formProfile.addEventListener("submit", function (event) {
    event.preventDefault();
    titlePerfile.textContent = nameInput.value;
    descriptionPerfile.textContent = aboutInput.value;
    popup.classList.remove("popup_opened");
  });

  formAddCard.addEventListener("submit", function (event) {
    event.preventDefault();
    // const titleInput2 = document.querySelector("#input-title2");
    //  const aboutInput2 = document.querySelector("#input-about2");
    const newCard = createCard(titleInput2.value, aboutInput2.value);
    gallery.prepend(newCard);
    popup2.classList.remove("popup_opened2");
  });
});

// Seleccionamos el formulario y sus elementos
const formElement = document.querySelector("#edit-perfil-form");
const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
const saveButton = formElement.querySelector(".popup__save");
const popup = document.querySelector("#edit-perfil");

// Muestra el error debajo del campo
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

// Oculta el error
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

// Comprueba si un campo es válido
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// Habilita o deshabilita el botón según la validez
const toggleButtonState = (inputList, buttonElement) => {
  const hasInvalidInput = inputList.some((inputElement) => !inputElement.validity.valid);
  if (hasInvalidInput) {
    buttonElement.disabled = true;
    buttonElement.classList.add("popup__save_disabled");
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove("popup__save_disabled");
  }
};

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove('popup_opened')
  }
});

// Configura los listeners del formulario
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__save");

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

// Inicializa todo
setEventListeners(formElement);

// Evita recargar al enviar
formElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log("Formulario válido y enviado 🎉");
});


