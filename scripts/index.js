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
