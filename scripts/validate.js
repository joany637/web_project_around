
// Seleccionamos el formulario principal
const formElement = document.querySelector(".popup__form");

// Seleccionamos los inputs individuales
const inputTitle = document.querySelector("#input-title2");
const inputUrl = document.querySelector("#input-about2");
const popup2 = document.querySelector("#edit-perfil2")
// Seleccionamos los mensajes de error según el id del input
const errorTitle = formElement.querySelector(`.input-title2-error`);
const errorUrl = formElement.querySelector(`.input-about2-error`);

// Seleccionamos el botón de guardar
const saveButton = formElement.querySelector(".popup__save");

// ---- FUNCIONES ----

// Muestra un error visual y de texto
const showInputError = (input, errorElement, errorMessage) => {
  input.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

// Oculta el error
const hideInputError = (input, errorElement) => {
  input.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

// Comprueba si un input es válido y muestra/oculta el error
const isValid = (input, errorElement) => {
  if (!input.validity.valid) {
    showInputError(input, errorElement, input.validationMessage);
  } else {
    hideInputError(input, errorElement);
  }
};

// Activa o desactiva el botón de guardar
const toggleButtonState = (inputList, buttonElement) => {
  console.log(inputList, "inputList")
  const hasInvalidInput = inputList.some((inputElement) => !inputElement.validity.valid);
  if (hasInvalidInput) {
    buttonElement.disabled = true;
    buttonElement.classList.add("popup__save_disabled");
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove("popup__save_disabled");
  }
};

// ---- EVENTOS ----

// Valida en tiempo real los dos inputs
const inputList= Array.from(document.querySelectorAll(".popup__input2"))
const buttonElement=document.querySelector(".popup__save")
inputTitle.addEventListener("input", () => {
  isValid(inputTitle, errorTitle);
  toggleButtonState(inputList, buttonElement);
});

inputTitle.addEventListener("input", () => {
  isValid(inputTitle, errorTitle);
    toggleButtonState(inputList, buttonElement);
});
inputUrl.addEventListener("input", () => {
  isValid(inputUrl, errorUrl);
  toggleButtonState(inputList, buttonElement);
});

popup2.addEventListener("click", (e) => {
  if (e.target === popup2) {
    popup2.classList.remove('popup_opened')
  }
});

// Previene el envío real y muestra mensaje en consola
formElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log("Formulario enviado correctamente 🎉");
});

// Inicializa el botón desactivado al inicio
toggleButtonState(inputList, buttonElement);
export function enableValidation() {

}

