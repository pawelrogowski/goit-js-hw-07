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

  linkElement.appendChild(imageElement);
  galleryElement.appendChild(linkElement);
});

const lightbox = new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionPosition: 250,
  // disable scroll added because it adds inline padding-right: 17px to body, happens only when viewport width is big
  disableScroll: false,
});
