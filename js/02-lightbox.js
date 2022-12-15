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
function overflowsViewport() {
  const elements = document.querySelectorAll("*");

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    const elementRect = element.getBoundingClientRect();

    if (elementRect.right > viewportWidth || elementRect.left < 0 || elementRect.top < 0 || elementRect.bottom > viewportHeight) {
      return true;
    }
  }
  return false;
}

const lightbox = new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionPosition: 250,
  disableScroll: overflowsViewport(),
});

window.addEventListener(
  "resize",
  _.debounce(function () {
    const isOverflowing = overflowsViewport();
    isOverflowing ? (lightbox.defaultOptions.disableScroll = true) : (lightbox.defaultOptions.disableScroll = false);
  }, 100)
);
