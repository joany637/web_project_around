document.addEventListener("DOMContentLoaded", () => {
  const abrirModal = document.getElementById("abrirModal");
  const popup = document.getElementById("edit-perfil");
  const cerrarModal = document.querySelector(".popup__close");
const nameInput = document.querySelector("#input-name");
const aboutInput = document.querySelector("#input-about");
const titlePerfile = document.querySelector(".perfile-title");
  const descriptionPerfile = document.querySelector(".perfile-description");
  const cardLikeButton = document.querySelector (".card_like-button")


cardLikeButton.addEventListener("click", () => {
  if(!cardLikeButton.classList.contains("active")){
      cardLikeButton.classList.add("active");
  }
  else{ 
    cardLikeButton.classList.remove("active");}

})
  abrirModal.addEventListener("click", () => {
    popup.classList.add("popup_opened");
    nameInput.value = titlePerfile.textContent;
    aboutInput.value = descriptionPerfile.textContent;
  });

  cerrarModal.addEventListener("click", () => {
    popup.classList.remove("popup_opened");

  });


});
