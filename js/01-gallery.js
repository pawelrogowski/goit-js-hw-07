import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryElement = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const linkElement = document.createElement("a");
  linkElement.classList.add("gallery__item");
  linkElement.setAttribute("href", item.original);

  const imageElement = document.createElement("img");
  imageElement.classList.add("gallery__image");
  imageElement.src = item.preview;
  imageElement.setAttribute("alt", item.description);
  imageElement.setAttribute("data-source", item.original);

  linkElement.appendChild(imageElement);
  galleryElement.appendChild(linkElement);
});

galleryElement.addEventListener("click", (event) => {
  if (event.target.classList.contains("gallery__image")) {
    event.preventDefault();

    const imageSource = event.target.getAttribute("data-source");
    const imageDescription = event.target.getAttribute("alt");

    const modalInstance = basicLightbox.create(`
      <img src="${imageSource}" alt="${imageDescription}">
    `);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        modalInstance.close();
      }
    });

    modalInstance.show();
  }
});
